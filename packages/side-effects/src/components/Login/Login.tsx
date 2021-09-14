import React, { ChangeEvent, FC, FormEvent, useContext, useEffect, useReducer, useRef } from "react"
import { LOGIN_FORM_INITIAL_STATE, loginFormReducer } from "./reducer"
import { Card } from "../UI/Card"
import { Button } from "../UI/Button"
import { throttle } from "../../utils"
import { AuthContext } from "../../context"
import classes from "./Login.module.css"
import { Input } from "../UI/Input"


export const Login: FC = (props) => {
  const auth = useContext(AuthContext)
  const [ { email, password, valid }, dispatch ] = useReducer(loginFormReducer, LOGIN_FORM_INITIAL_STATE)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "VALIDATE_FORM" })
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  } , [ password.value, email.value ])

  const onLoginFormSubmit = throttle((e: FormEvent) => {
    e.preventDefault()
    if (valid) {
      auth.login(email.value, password.value)
    } else if (!email.valid) {
      emailRef.current && emailRef.current.focus()
    } else if (!password.valid) {
      passwordRef.current && passwordRef.current.focus()
    } else {
      emailRef.current && emailRef.current.focus()
    }
  }, 1000)

  const onEmailChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "EMAIL_ENTER", payload: value.trim() })
  }

  const onPasswordChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "PASSWORD_ENTER", payload: value.trim() })
  }

  const onEmailBlur = () => dispatch({ type: "EMAIL_BLUR" })
  const onPasswordBlur = () => dispatch({ type: "PASSWORD_BLUR" })

  return (
    <Card className={classes.login}>
      <form onSubmit={onLoginFormSubmit}>
        <Input ref={emailRef}
               label="E-Mail"
               id="email"
               type="email"
               value={email.value}
               valid={email.valid}
               onChange={onEmailChange}
               onBlur={onEmailBlur} />
        <Input ref={passwordRef}
               label="Password"
               id="password"
               type="password"
               value={password.value}
               valid={password.valid}
               onChange={onPasswordChange}
               onBlur={onPasswordBlur} />
        <div className={classes.actions}>
          <Button type="submit">
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}
