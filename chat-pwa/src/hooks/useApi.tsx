import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useAPI() {
  const fetchData = async ({ pageParam }: { pageParam: number }) => {
    try {
      const { data } = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${pageParam}`
      )
      return data
    } catch (error: unknown) {
      console.error(error)
    }
  }

  const { data, fetchNextPage, isPending, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['chats'],
      queryFn: fetchData,
      initialPageParam: 0,
      getNextPageParam: (lastPage, lastPageParam) => {
        if (!lastPage) {
          return undefined
        }
        return lastPageParam.length + 1
      },
    })

  const pages = data?.pages
  const date = new Date(data?.pages[0].chats[0].time)
  const newDate = `${date.getDate()} ${date.toLocaleDateString('en-US', {
    month: 'short',
  })}, ${date.getFullYear()}`

  return {
    pages,
    newDate,
    fetchNextPage,
    isPending,
    hasNextPage,
    isFetchingNextPage,
  }
}
