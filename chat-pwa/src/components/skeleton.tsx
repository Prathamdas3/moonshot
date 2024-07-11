import { Skeleton } from './ui/skeleton'

export default function PlaceHolder() {
  return (
    <section className="flex gap-2">
      <Skeleton className="w-6 h-6 rounded-full" />
      <Skeleton className="h-10 p-2 rounded-xl w-72 sm:w-full drop-shadow-xl" />
    </section>
  )
}
