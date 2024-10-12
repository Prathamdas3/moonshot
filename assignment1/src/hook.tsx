import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState<string>(value)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [endTime, setEndTime] = useState<Date | null>(null)

  if (!startTime) {
    setStartTime(new Date())
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
      setEndTime(new Date())
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, delay])

  return { debounceValue, startTime, endTime }
}
