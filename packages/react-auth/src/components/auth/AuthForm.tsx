import React, { FC, useState } from "react"
import classes from "./AuthForm.module.css"
import { signIn, signUp } from "../../api/auth"
import { useAuth } from "../../store"
import { useHistory } from "react-router-dom"


export const AuthForm: FC = () => {
  const auth = useAuth()
  const history = useHistory()

  const [ login, setLogin ] = useState<boolean>(true)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  const onSwitchButtonClick = () => setLogin(prev => !prev)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const handler = login ? signIn : signUp

    try {
      const authResult = await handler({ email, password, returnSecureToken: true })
      auth.login(authResult.idToken, authResult.refreshToken)
      history.replace("/home")
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{ login ? "Login" : "Sign Up" }</h1>
      <form onSubmit={onSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            onChange={onInputChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Email</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            onChange={onInputChange}
          />
        </div>
        <div className={classes.actions}>
          {
            loading
              ? <h1>loading...</h1>
              : <button>{ login ? "Login" : "Create Account" }</button>
          }
          <button
            type="button"
            className={classes.toggle}
            onClick={onSwitchButtonClick}
          >
            { login ? "Create new account" : "Login with existing account" }
          </button>
        </div>
      </form>
    </section>
  )
}
