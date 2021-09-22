import styled from "styled-components"


export const TaskItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  
  &:last-of-type {
    border-bottom: none;
  }
`
