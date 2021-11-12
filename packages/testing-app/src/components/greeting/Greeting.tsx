import React, { FC, useState } from "react"
import { Output } from "../output"


export const Greeting: FC = () => {
  const [ isTextChange, setIsTextChange ] = useState<boolean>(false)
  const changeText = () => setIsTextChange(prev => !prev)

  return (
    <div>
      <h2>Hello World!</h2>
      <Output>{ isTextChange ? "Changed!" : "It's good to see you!" }</Output>
      <button onClick={changeText}>Change Text!</button>
    </div>
  )
}
