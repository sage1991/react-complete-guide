import React, { FC, useState } from 'react';
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import { User } from "./model/user";


export const App: FC = () => {
  const [ users, setUsers ] = useState<User[]>([])

  const onSubmitUser = (user: User) => {
    setUsers(prevUsers => [ ...prevUsers, user ])
  }

  return (
    <div>
      <AddUser onSubmitUser={onSubmitUser} />
      <UserList users={users} />
    </div>
  );
}
