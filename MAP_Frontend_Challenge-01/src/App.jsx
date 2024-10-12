import { Suspense, lazy } from 'react'
import FakeData from '../constant.json'
const DefaultCard = lazy(() => import('./components/Card'))

export default function App() {
  const listCards = FakeData.map((e) => localStorage.getItem(`cardId${e.id}`))

  return (
    <main
      className="flex items-center min-h-screen gap-2 pl-5 overflow-x-auto sm:container sm:gap-2 sm:p-14 scrollbar-thin custom-scrollbar scroll-smooth snap-normal snap-x "
      dir="ltr"
    >
      <Suspense
        fallback={
          <p className="flex items-center justify-center min-h-screen text-5xl">
            Loading...
          </p>
        }
      >
        {FakeData.map((sample) => (
          <DefaultCard key={sample.id} sample={sample} list={listCards} />
        ))}
      </Suspense>
    </main>
  )
}
