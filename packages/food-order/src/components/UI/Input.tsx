import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"


const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  & label {
    font-weight: bold;
    margin-right: 1rem;
  }
  
  & input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(({ label, ...inputProps }, ref) => {
  return (
    <InputContainer>
      <label htmlFor={inputProps.id}>{ label }</label>
      <input ref={ref} {...inputProps} />
    </InputContainer>
  )
})
