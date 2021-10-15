import React, { FC } from "react"
import classes from "./Auth.module.css"
import { useDispatch } from "../../store"
import { actions as auth } from "../../store/auth"


export const Auth: FC = () => {
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(auth.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}
