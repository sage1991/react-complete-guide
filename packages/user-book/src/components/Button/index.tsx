import styled from "styled-components";


export const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background-color: #4f005f;
  color: #ffffff;
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition: background-color 300ms, border-color 300ms;
  border-radius: 8px;
  
  &:hover,
  &:active {
    background-color: #741188;
    border-color: #741188;
  }
  
  :focus {
    outline: none;
  }
`
