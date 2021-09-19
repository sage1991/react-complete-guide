import { createContext } from "react"
import { UserModel } from "../../model"


interface UserContextData {
  users: UserModel[]
}

export const UserContext = createContext<UserContextData>({ users: [] })
