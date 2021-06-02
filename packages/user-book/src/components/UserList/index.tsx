import React, { FC } from "react";
import { User } from "../../model/user";
import { Card } from "../Card";
import classes from "./UserLIst.module.css";


interface Props {
  users: User[];
}

export const UserList: FC<Props> = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {
          users.map(({ name, age, id }) => {
            return (
              <li key={id}>
                { `${name} (${age} years old)` }
              </li>
            )
          })
        }
      </ul>
    </Card>
  )
}
