import { Dispatch, SetStateAction, useCallback, useState } from "react"


type Validate<T> = (value: T) => boolean
interface InputState<T> {
  value: T
  setValue: Dispatch<SetStateAction<T>>
  isTouched: boolean
  setTouched: Dispatch<SetStateAction<boolean>>
  isValid: boolean
  isError: boolean
  reset: () => void
}

export const useInput = <T> (validate: Validate<T>, initialValue: T): InputState<T> => {
  const [ value, setValue ] = useState<T>(initialValue)
  const [ isTouched, setTouched ] = useState<boolean>(false)
  const isValid: boolean = validate(value)
  const isError: boolean = isTouched && !isValid

  const reset = useCallback(() => {
    setValue(initialValue)
    setTouched(false)
  }, [ initialValue ])

  return {
    value,
    setValue,
    isTouched,
    setTouched,
    isValid,
    isError,
    reset
  }
}
