'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          queries: { staleTime: 5 * 1000, refetchInterval: 5 * 1000 },
        },
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  )
}
