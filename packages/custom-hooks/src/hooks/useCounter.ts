import { useEffect, useState } from "react"


export const useCounter = (increment: number, ms: number): number => {
  const [ counter, setCounter ] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + increment)
    }, ms)
    return () => clearInterval(interval)
  }, [ increment, ms ])

  return counter;
}
