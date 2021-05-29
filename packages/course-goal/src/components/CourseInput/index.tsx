import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button } from "../Button";
import styled from "styled-components";


interface Props {
  onAddGoal: (text: string) => void;
}

export const CourseInput: FC<Props> = ({ onAddGoal }) => {
  const [ enteredValue, setEnteredValue ] = useState<string>("")
  const [ isValid, setValid ] = useState<boolean>(true)

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValid(value.trim().length !== 0)
    setEnteredValue(value)
  }

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setValid(false)
      return
    }
    onAddGoal(enteredValue)
    setValid(true)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <FormControl isValid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={onInputChange}/>
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};


interface FormControlProps {
  isValid?: boolean;
}

const FormControl = styled.div<FormControlProps>`
  margin: 0.5rem 0;
  
  label {
    color: ${props => props.isValid ? "#000" : "red"};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.isValid ? "#ccc" : "red"};
    background-color: ${props => props.isValid ? "#fff" : "#ffd7d7"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  input:focus {
    outline: none;
    background-color: #fad0ec;
    border-color: #8b005d;
  }
`
