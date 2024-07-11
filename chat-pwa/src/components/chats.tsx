import useAPI from '@/hooks/useApi'
import { useEffect, useMemo, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import PlaceHolder from './skeleton'
import TextCards from './cards'

type chat = {
  id: string
  message: string
  sender: {
    image: string
    is_kyc_verified: boolean
    self: boolean
    user_id: string
  }
  time: string
}

export default function Chats() {
  const { pages, hasNextPage, isPending, fetchNextPage } = useAPI()
  const chats = useMemo(
    () => pages?.flatMap((page) => page.chats) ?? [],
    [pages]
  )

  const { ref, inView } = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView, hasNextPage])

  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  const previousHeightRef = useRef(0)
  const handleFetchPage = useCallback(async () => {
    if (hasNextPage) {
      const chatContainer = chatContainerRef.current
      if (chatContainer != null) {
        previousHeightRef.current = chatContainer.scrollHeight
        await fetchNextPage()
        chatContainer.scrollTop =
          chatContainer.scrollHeight - previousHeightRef.current
      }
    }
  }, [fetchNextPage, hasNextPage])

  useEffect(() => {
    if (inView && hasNextPage) {
      handleFetchPage()
    }
  }, [inView, handleFetchPage, hasNextPage])

  return (
    <div ref={chatContainerRef}>
      {isPending ? (
        <PlaceHolder />
      ) : (
        <div className="flex flex-col w-full gap-5">
          <div ref={ref}></div>

          {chats.map((chat: chat) => (
            <TextCards
              key={chat.id}
              src={chat.sender.image}
              des={chat.message}
              self={chat.sender.self}
              verified={chat.sender.is_kyc_verified}
            />
          ))}
        </div>
      )}
    </div>
  )
}
