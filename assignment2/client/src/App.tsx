import { useEffect, useState } from 'react'
import axios from 'axios'

type output = {
  count: number
  data: string
}

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [randomStrings, setRandomStrings] = useState<output[]>([])

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws')
    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data)
      setCount(data.count)
      try {
        // const { data } = await axios.get('http://localhost:8000/')
        // setRandomStrings([
        //   ...randomStrings,
        //   { count: count, data: data.data as string },
        // ])
      } catch (error) {
        console.error(error)
      }
    }

    return () => {
      socket.close()
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000')
        const str = data.data as string
        setRandomStrings((prevState) => [
          ...prevState,
          { count: count, data: str },
        ])
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [count])

  return (
    <main className="container items-center justify-center bg-slate-900">
      <h3 className="space-y-4 text-5xl font-bold text-center ">{count}</h3>
      <div className="text-center text-white list-decimal">
        {randomStrings?.map(
          (e) =>
            e.count != 0 && (
              <div key={e.count} className="flex items-center gap-2">
                <span>{e.count}</span>
                <p>{e.data}</p>
              </div>
            )
        )}
      </div>
    </main>
  )
}
