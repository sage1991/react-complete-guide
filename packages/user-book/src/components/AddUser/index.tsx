import React, { FC, useState } from "react";
import { Card } from "../Card";
import classes from "./AddUser.module.css";
import { Button } from "../Button";
import { User } from "../../model/user";
import { ErrorModal } from "../ErrorModal";


let index: number = 1

interface Props {
  onSubmitUser: (user: User) => void;
}

export const AddUser: FC<Props> = ({ onSubmitUser }) => {
  // input state
  const [ userName, setUserName ] = useState<string>("")
  const [ age, setAge ] = useState<string>("")

  // error modal state
  const [ isError, setError ] = useState<boolean>(false)
  const [ errorTitle, setErrorTitle ] = useState<string>("")
  const [ errorMessage, setErrorMessage ] = useState<string>("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError(true)
      setErrorTitle("INVALID INPUT")
      setErrorMessage("Please enter a valid name and age (not-empty values)")
      return
    }

    if (+age < 1) {
      setError(true)
      setErrorTitle("INVALID AGE")
      setErrorMessage("Please enter a valid age (> 0)")
      return
    }

    onSubmitUser({
      id: `user-${index++}`,
      name: userName,
      age: +age
    })

    setUserName("")
    setAge("")
  }

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    switch (name) {
      case "username":
        setUserName(value)
        break;
      case "age":
        setAge(value);
        break;
    }
  }

  return (
    <>
      <Card className={classes.form}>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">User Name</label>
          <input id="username" name="username" type="text"
                 value={userName}
                 onChange={onInputChange} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" name="age" type="number"
                 value={age}
                 onChange={onInputChange} />
          <Button type="submit">
            Add User
          </Button>
        </form>
      </Card>
      { isError && <ErrorModal title={errorTitle} message={errorMessage} close={() => setError(false)} /> }
    </>
  )
}
