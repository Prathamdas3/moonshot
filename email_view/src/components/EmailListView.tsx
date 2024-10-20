import { getEmailData, EmailType } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useEmail, usePage, useFilter } from '@/lib/store'
import { EmailListViewPlaceHolder } from './PlaceHolders'
import { ScrollArea } from './ui/scroll-area'
import { getTimeFormat, setLocalStorageRead, getLocalStorageRead } from '@/lib/helpers'
import { useEffect, useState } from 'react'


export default function EmailListView({ favoriteEmails }: { favoriteEmails: string[] }) {
  const page = usePage(state => state.page)
  const email = useEmail((state) => state.emailData)
  const changeEmail = useEmail((state) => state.changeEmailData)
  const readEmails = getLocalStorageRead()
  const filter = useFilter(state => state.filter)
  const [emails, setEmails] = useState<EmailType[] | undefined>(undefined)

  const { data, error, isLoading } = useQuery({
    queryKey: ["emailData", page], queryFn: async () => await getEmailData(page), enabled: !!page,
  })

  useEffect(() => {
    if (!data) setEmails([])

    if (filter === 'Favorites') {
      const updatedData = data?.data.filter((email: EmailType) => favoriteEmails.includes(email.id))
      setEmails(updatedData)
    }

    if (filter === 'Read') {
      const updatedData = data?.data.filter((email: EmailType) => readEmails.includes(email.id))
      setEmails(updatedData)
    }

    if ((readEmails.length || favoriteEmails.length) === 0) setEmails([])
    if (filter === 'Unread') { if (readEmails.length !== data?.total) { setEmails(data?.data) } else { setEmails([]) } }

  }, [data, favoriteEmails, readEmails, filter])



  if (error) {
    return <section className='flex items-center justify-center min-h-screen'>
      SomeThing went wrong Please reload the page
    </section>
  }

  if (isLoading) {
    return <div className={`custom_height ${email.emailID !== '' ? 'w-[37%]' : 'w-full'} `}><EmailListViewPlaceHolder /></div>
  }

  const handleClick = ({ name, date, emailID, subject }: { name: string, date: number, emailID: string, subject: string }) => {
    changeEmail({ name, date, emailID, subject })
    setLocalStorageRead(emailID)
  }


  return (
    <ScrollArea className={`custom_height ${email.emailID !== '' ? 'w-[37%]' : 'w-full'} py-4`}>
      {emails?.map((email: EmailType) => (
        <div
          key={email.id}
          className={`p-4 mb-5  rounded-lg cursor-pointer  border hover:border-[#E54065] border-[#CFD2DC] ${readEmails.includes(email.id) ? 'bg-[#F2F2F2]' : 'bg-white'} `}
          onClick={() => handleClick({ name: email.from.name, emailID: email.id, date: email.date, subject: email.subject })}
        >
          <div className="flex mb-2">
            <div className="w-10 h-10 rounded-full bg-[#E54065] text-white flex items-center justify-center mr-3">
              {email.from.name.slice(0, 2).toUpperCase()}
            </div>
            <div className='text-[#636363] '>
              <div className="font-semibold"><span className='font-normal'>From:</span> {email.from.email}</div>
              <div className="text-sm mt-[1px] font-semibold"><span className='font-normal'>Subject:</span>  {email.subject}</div>
              <div className="text-sm my-2">{email.short_description}</div>
              <div className="flex gap-6 text-xs ">
                <span>{getTimeFormat(email.date)}</span>
                {favoriteEmails.includes(email.id) && <span className="text-[#E54065] font-semibold" >Favorite</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}