import React, { FC, useState } from "react"
import classes from "./ProfileForm.module.css"
import { changePassword } from "../../api/auth"
import { useAuth } from "../../store"
import { useHistory } from "react-router-dom"


export const ProfileForm: FC = () => {
  const auth = useAuth()
  const history = useHistory()

  const [ password, setPassword ] = useState<string>("")

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await changePassword({
        idToken: auth.token,
        password: password,
        returnSecureToken: true
      })
      history.replace("/home")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          name="new-password"
          onChange={onInputChange}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}
