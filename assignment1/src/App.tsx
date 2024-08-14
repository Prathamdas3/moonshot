import { useState } from 'react'
import { useDebounce } from './hook'

export default function App() {
  const [value, setValue] = useState<string>('')
  const { debounceValue, startTime, endTime } = useDebounce(value)
  const [pasteValue, setPasteValue] = useState<string>('')
  const [pasteTime, setPasteTime] = useState<Date | null>(null)
  const onPaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    setPasteValue(event.clipboardData!.getData('text'))
    setPasteTime(new Date())
  }

  return (
    <main className="space-y-3 font-bold text-white">
      <textarea
        cols={80}
        rows={12}
        autoComplete=""
        className="p-6 font-normal text-black rounded-xl"
        onChange={(e) => setValue(e.target.value)}
        onPaste={onPaste}
      />
      <p className="text-justify text-wrap w-90">{debounceValue}</p>

      <p>You started at: {startTime?.getSeconds()}</p>
      <p>You Ended at: {endTime?.getSeconds()}</p>
      {pasteValue.length > 0 && (
        <p>Your Pasting time: {pasteTime?.getSeconds()}</p>
      )}
    </main>
  )
}
