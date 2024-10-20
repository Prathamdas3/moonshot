import { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import { MainPlaceHolder } from './components/PlaceHolders'
import { toast } from 'sonner'
import { getLocalStorageFavorites, removeLocalStorageFavorites, setLocalStorageFavorites } from './lib/helpers'
const TopBar = lazy(() => import('./components/TopSection'))
const EmailListView = lazy(() => import("./components/EmailListView"))
const EmailView = lazy(() => import("./components/EmailView"))

export default function App() {
    const [favoriteEmails, setFavoriteEmails] = useState<string[]>([])

    useEffect(() => {
      setFavoriteEmails(getLocalStorageFavorites())
    }, [])

    const handleFavorites = (id: string) => {
      let updatedFavorites: string[] = []
  
      if (favoriteEmails.includes(id)) {
        removeLocalStorageFavorites(id)
        updatedFavorites = favoriteEmails.filter(favId => favId !== id)
        toast.success('Successfully removed email from favorites')
      } else {
        setLocalStorageFavorites(id)
        updatedFavorites = [...favoriteEmails, id]
        toast.success('Successfully added email to favorites')
      }
      setFavoriteEmails(updatedFavorites)
    }

  return (
    <Suspense fallback={<MainPlaceHolder/>}>
      <main className="h-screen container p-4">
        <TopBar />
        <div className='flex gap-6'>
        <EmailListView favoriteEmails={favoriteEmails}/>
        <EmailView favoriteEmails={favoriteEmails} handleFavorites={handleFavorites}/>
        </div>
        <Toaster/>
      </main>
    </Suspense>
  )
}