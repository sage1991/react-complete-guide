import React, { FC } from "react"
import clsx from "clsx"
import { useInput } from "../hooks/useInput"


const EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/
const validateEmail = (email: string) => EMAIL_REGEX.test(email.trim())

export const SimpleInput: FC = () => {
  const name = useInput<string>("", value => !!value.trim())
  const email = useInput<string>("", validateEmail)
  const submittable: boolean = name.isValid && email.isValid

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      name.setValue(e.target.value)
    } else {
      email.setValue(e.target.value)
    }
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      name.setIsTouched(true)
    } else {
      email.setIsTouched(true)
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!submittable) return

    console.log(name.value.trim(), email.value.trim())
    name.reset()
    email.reset()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={clsx("form-control", name.hasError && "invalid")}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { name.hasError && <p className="error-text">Name must not be empty.</p> }
      </div>
      <div className={clsx("form-control", email.hasError && "invalid")}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { email.hasError && <p className="error-text">Check your email address.</p> }
      </div>
      <div className="form-actions">
        <button disabled={!submittable}>Submit</button>
      </div>
    </form>
  )
}
