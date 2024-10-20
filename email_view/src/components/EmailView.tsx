import { useEmail } from '@/lib/store'
import { Button } from './ui/button'
import {getTimeFormat } from '@/lib/helpers'
import { useQuery } from '@tanstack/react-query'
import { getIndivitualEmailData } from '@/lib/api'
import { EmailViewPlaceHolder } from './PlaceHolders'

export default function EmailView({ favoriteEmails, handleFavorites }: { favoriteEmails: string[], handleFavorites: (id: string) => void }) {
    const email = useEmail(state => state.emailData)
    const { data, error, isLoading } = useQuery({ queryKey: ["emailData", email.emailID], queryFn: async () => await getIndivitualEmailData(email.emailID), enabled: !!email.emailID })

    if (isLoading) {
        return <div className={`${email.emailID !== '' ? 'w-[63%]' : 'hidden'} p-4 bg-white border border-[#CFD2DC] h-[90vh] rounded-lg`}><EmailViewPlaceHolder /></div>
    }

    if (error) {
        console.log(error)
        return <section>Some thing went wrong</section>
    }

    return <section className={`${email.emailID !== '' ? 'w-[63%]' : 'hidden'} p-4 bg-white border border-[#CFD2DC] h-[90vh] rounded-lg`}>
        {email.emailID && (
            <div className='flex pt-2 '>
                <div className='w-20 px-2'>
                <div className="w-14 h-14 rounded-full bg-[#E54065] text-white flex items-center justify-center mr-3">
                    {email.name.slice(0, 2).toUpperCase()}
                </div>
                </div>
                <div >
                    <div className="mb-6">
                        <div className='text-[#636363] flex justify-between items-center w-[95%]'>
                        <h3 className='font-bold text-2xl text-[#636363]'>{email.subject}</h3>
                        <Button variant="outline" className="bg-[#E54065] text-white hover:text-white  hover:bg-[#E54065]/90 rounded-3xl" onClick={() => handleFavorites(data.id)}>
                            <p className='font-semibold text-sm'>{favoriteEmails.includes(data.id) ? 'Remove from favorites' : 'Mark as favorite'}</p>
                        </Button>
                        </div>
                        <p className='text-sm my-4 text-[#636363] '>{getTimeFormat(email.date)}</p>
                    </div>
                    
                    <p className="text-[#636363] w-[95%]">
                        <div
                            dangerouslySetInnerHTML={{ __html: data?.body }}
                            className='text-justify'
                        />
                    </p>
                </div>
            </div>
        )}
    </section>
}