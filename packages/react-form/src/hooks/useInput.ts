import React, { useState } from "react"


type Validate<T> = (value: T) => boolean

interface InputState<T> {
  value: T
  isTouched: boolean
  isValid: boolean
  hasError: boolean
  setValue: React.Dispatch<React.SetStateAction<T>>
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>
  reset: () => void
}

export const useInput = <T> (initialValue: T, validate: Validate<T>): InputState<T> => {
  const [ value, setValue ] = useState<T>(initialValue)
  const [ isTouched, setIsTouched ] = useState<boolean>(false)
  const isValid = validate(value)
  const hasError = isTouched && !isValid

  const reset = () => {
    setValue(initialValue)
    setIsTouched(false)
  }

  return {
    value,
    isTouched,
    hasError,
    isValid,
    setValue,
    setIsTouched,
    reset
  }
}
