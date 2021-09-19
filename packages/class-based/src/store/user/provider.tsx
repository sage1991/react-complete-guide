import React, { FC } from "react"
import { UserContext } from "./context"
import { UserModel } from "../../model"


const DUMMY_USERS: UserModel[] = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" }
]

export const UserProvider: FC = (props) => {
  return (
    <UserContext.Provider value={{ users: DUMMY_USERS }}>
      { props.children }
    </UserContext.Provider>
  )
}
