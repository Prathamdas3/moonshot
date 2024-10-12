import Header from './components/header'
import Footer from './components/footer'
import useAPI from './hooks/useApi'
import Chats from './components/chats'

export default function App() {
  const { pages, newDate } = useAPI()
  return (
    <main className="sm:container">
      <Header
        from={pages && pages[0].from}
        to={pages && pages[0].to}
        name={pages && pages[0].name}
      />
      <article className="relative h-[480px] min-[380px]:h-[650px]  min-[1000px]:h-[550px] min-[1500px]:h-[730px] min-[400px]:h-[720px] px-4 py-5 overflow-y-auto scroll-smooth hide_scrollbar top-32 ">
        <div className="flex items-center justify-center gap-3 mb-8 ">
          <div className="w-1/3 border sm:w-[45%]"></div>
          <p className="text-[#B7B7B7] leading-[17.57px] text-sm font-normal">
            {newDate}
          </p>
          <div className="w-1/3 border sm:w-[45%]"></div>
        </div>
        <Chats />
      </article>
      <Footer />
    </main>
  )
}
