import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

type Ts = {
  startTimestamp: number
  endTimestamp: number
}

export default function App() {
  const [text, setText] = useState('')
  const [timestamps, setTimestamps] = useState<Ts[]>([])
  const typingTimeoutRef = useRef<number | null>(null)
  const prevTextRef = useRef('')

  const handleChange = (e) => {
    const newText = e.target.value

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const endTimestamp = new Date().getSeconds()
      const startTimestamp = timestamps.length
        ? timestamps[timestamps.length - 1].startTimestamp
        : endTimestamp

      setTimestamps((prevState) => [
        ...prevState,
        {
          startTimestamp: startTimestamp as number,
          endTimestamp: endTimestamp,
        },
      ])

      const delta = getDelta(prevTextRef.current, newText)
      if (delta) {
        sendToBackend(delta)
        prevTextRef.current = newText
      }
    }, 1000)

    setText(newText)
  }

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData('Text')
    setText((prev) => prev + pastedText)

    const endTimestamp = new Date().getSeconds()
    setTimestamps((prevState) => [
      ...prevState,
      { startTimestamp: endTimestamp, endTimestamp: endTimestamp },
    ])

    const delta = getDelta(prevTextRef.current, pastedText)
    if (delta) {
      sendToBackend(delta)
      prevTextRef.current += pastedText
    }
  }

  const getDelta = (prevText: string, newText: string) => {
    if (prevText === newText) return null

    // For simplicity, we're returning the whole new text as delta here.
    return newText
  }

  const sendToBackend = async (delta: string) => {
    try {
      await axios.post('http://localhost:8000/save-text', { delta })
    } catch (error) {
      console.error('Error saving text:', error)
    }
  }

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [])

  return (
    <main className="space-y-3 font-bold text-white">
      <div>
        <textarea
          value={text}
          onChange={handleChange}
          onPaste={handlePaste}
          rows={10}
          cols={50}
          placeholder="Type something or paste text here..."
        />
        <div>
          <h4>Text Content</h4>
          <p>{text}</p>
        </div>
        <div>
          <h4>Timestamps</h4>
          <ul>
            {timestamps.map((ts, index) => (
              <li key={index}>
                Started: {ts.startTimestamp}, Ended: {ts.endTimestamp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
