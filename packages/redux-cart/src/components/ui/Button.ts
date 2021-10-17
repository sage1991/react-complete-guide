import styled from "styled-components"


export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  background-color: transparent;
  color: #1a8ed1;
  border: 1px solid #1a8ed1;
  
  &:hover,
  &:active {
    background-color: #1ac5d1;
    border-color: #1ac5d1;
    color: white;
  }
`
