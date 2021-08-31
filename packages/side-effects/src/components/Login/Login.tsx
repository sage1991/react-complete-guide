import React, { ChangeEvent, FC, FormEvent, useState } from "react"
import { Card } from "../UI/Card"
import { Button } from "../UI/Button"
import classes from "./Login.module.css"


interface Props {
  login: (email: string, password: string) => void
}

export const Login: FC<Props> = (props) => {
  const [ email, setEmail ] = useState<string>("")
  const [ isValidEmail, setIsValidEmail ] = useState<boolean>(true)
  const [ password, setPassword ] = useState<string>("")
  const [ isValidPassword, setIsValidPassword ] = useState<boolean>(true)
  const [ isValidForm, setIsValidForm ] = useState<boolean>(false)

  const onLoginFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    props.login(email, password)
  }

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    value = value.trim()
    setEmail(value)
    setIsValidForm(validatePassword(password) && validateEmail(value))
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    value = value.trim()
    setPassword(value)
    setIsValidForm(validateEmail(email) && validatePassword(value))
  }

  const onEmailBlur = () => setIsValidEmail(validateEmail(email))
  const onPasswordBlur = () => setIsValidPassword(validatePassword(password))

  return (
    <Card className={classes.login}>
      <form onSubmit={onLoginFormSubmit}>
        <div className={`${classes.control} ${isValidEmail ? "" : classes.invalid}`}>
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="email" value={email} onChange={onEmailChange} onBlur={onEmailBlur} />
        </div>
        <div className={`${classes.control} ${isValidPassword ? "" : classes.invalid}`}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={onPasswordChange} onBlur={onPasswordBlur} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!isValidForm}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}


const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
const validateEmail = (value: string) => EMAIL_REGEX.test(value)
const validatePassword = (value: string) => value.length > 6
