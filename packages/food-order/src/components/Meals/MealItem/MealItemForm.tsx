import React, { FC, FormEvent, useRef, useState } from "react"
import { Input } from "../../UI"
import classes from "./MealItemForm.module.css"


interface Props {
  id: string
  addToCart: (amount: number) => void
}

export const MealItemForm: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [ isAmountValid, setIsAmountValid ] = useState<boolean>(true)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const amount = +inputRef.current!.value

    if (amount === 0 || amount < 1 || amount > 5) {
      setIsAmountValid(false)
      return
    }

    props.addToCart(amount)
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Input ref={inputRef}
             label="Amount"
             id={`amount-${props.id}`}
             type="number"
             min="1" max="5" step="1" defaultValue="1" />
      <button type="submit">+ Add</button>
      { !isAmountValid && <p>please enter a valid amount (1-5)</p> }
    </form>
  )
}
