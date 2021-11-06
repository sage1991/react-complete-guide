import React, { FC } from "react"
import classes from "./UserProfile.module.css"
import { ProfileForm } from "./ProfileForm"


export const UserProfile: FC = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  )
}
