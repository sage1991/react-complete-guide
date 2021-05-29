import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button } from "../Button";
import "./CourseInput.css";


interface Props {
  onAddGoal: (text: string) => void;
}

export const CourseInput: FC<Props> = ({ onAddGoal }) => {
  const [ enteredValue, setEnteredValue ] = useState<string>("")

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value)
  }

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={onInputChange}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
