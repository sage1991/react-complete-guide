import React, { FC } from "react"
import { useInput } from "../hooks/useInput"
import clsx from "clsx"


const EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/
const isValidEmail = (email: string) => EMAIL_REGEX.test(email.trim())
const isNotEmptyString = (value: string) => !!value.trim()

export const BasicForm: FC = (props) => {
  const firstName = useInput<string>("", isNotEmptyString)
  const lastName = useInput<string>("", isNotEmptyString)
  const emailAddress = useInput<string>("", isValidEmail)
  const submittable: boolean = firstName.isValid && lastName.isValid && emailAddress.isValid

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "first-name":
        firstName.setValue(e.target.value)
        break
      case "last-name":
        lastName.setValue(e.target.value)
        break
      case "email-address":
        emailAddress.setValue(e.target.value)
        break
    }
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "first-name":
        firstName.setIsTouched(true)
        break
      case "last-name":
        lastName.setIsTouched(true)
        break
      case "email-address":
        emailAddress.setIsTouched(true)
        break
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!submittable) return

    console.log(
      firstName.value.trim(),
      lastName.value.trim(),
      emailAddress.value.trim()
    )
    firstName.reset()
    lastName.reset()
    emailAddress.reset()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="control-group">
        <div className={clsx("form-control", firstName.hasError && "invalid")}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstName.value}
            onChange={onInputChange}
            onBlur={onInputBlur}
          />
          { firstName.hasError && <p className="error-text">Name must not be empty.</p> }
        </div>
        <div className={clsx("form-control", lastName.hasError && "invalid")}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lastName.value}
            onChange={onInputChange}
            onBlur={onInputBlur}
          />
          { lastName.hasError && <p className="error-text">Name must not be empty.</p> }
        </div>
      </div>
      <div className={clsx("form-control", emailAddress.hasError && "invalid")}>
        <label htmlFor="email-address">E-Mail Address</label>
        <input
          type="text"
          id="email-address"
          name="email-address"
          value={emailAddress.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        { emailAddress.hasError && <p className="error-text">Invalid email address.</p> }
      </div>
      <div className="form-actions">
        <button disabled={!submittable}>Submit</button>
      </div>
    </form>
  )
}
