import styled from "styled-components"


export const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background-color: #4f005f;
  color: white;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 1.15rem;
  border-radius: 30px;
  
  &:hover,
  &:active {
    background-color: #741188;
    border-color: #741188;
  }
  
  &:focus {
    outline: none;
  }
  
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`