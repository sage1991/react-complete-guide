import React, { FC } from "react"
import { useInput } from "../../hooks/useInput"
import { Consumer } from "../../api/orders"
import classes from "./Checkout.module.css"
import clsx from "clsx"


interface Props {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void
  onConfirm: (order: Consumer) => void
}

export const Checkout: FC<Props> = (props) => {
  const name = useInput<string>(isNotEmpty, "")
  const street = useInput<string>(isNotEmpty, "")
  const postal = useInput<string>(isFiveChars, "")
  const city = useInput<string>(isNotEmpty, "")
  const submittable: boolean = name.isValid && street.isValid && postal.isValid && city.isValid

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!submittable) return;

    props.onConfirm({
      name: name.value,
      street: street.value,
      postal: postal.value,
      city: city.value
    })

    name.reset()
    street.reset()
    postal.reset()
    city.reset()
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        name.setValue(e.target.value)
        break
      case "street":
        street.setValue(e.target.value)
        break
      case "postal":
        postal.setValue(e.target.value)
        break
      case "city":
        city.setValue(e.target.value)
        break
    }
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        name.setTouched(true)
        break
      case "street":
        street.setTouched(true)
        break
      case "postal":
        postal.setTouched(true)
        break
      case "city":
        city.setTouched(true)
        break
    }
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={clsx(classes.control, name.isError && classes.invalid)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { name.isError && <p>Please enter a valid name!</p> }
      </div>
      <div className={clsx(classes.control, street.isError && classes.invalid)}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={street.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { street.isError && <p>Please enter a valid street!</p> }
      </div>
      <div className={clsx(classes.control, postal.isError && classes.invalid)}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          name="postal"
          value={postal.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { postal.isError && <p>Please enter a valid postal!</p> }
      </div>
      <div className={clsx(classes.control, city.isError && classes.invalid)}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { city.isError && <p>Please enter a valid city!</p> }
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!submittable} className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

const isNotEmpty = (value: string) => !!value.trim()
const isFiveChars = (value: string) => value.trim().length === 5
