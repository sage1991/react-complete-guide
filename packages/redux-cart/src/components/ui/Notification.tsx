import React, { FC } from "react"
import styled from "styled-components"


interface Props {
  status?: "error" | "success" | "pending"
  title?: string
  message?: string
}

export const Notification: FC<Props> = (props) => {
  return (
    <NotificationSection status={props.status}>
      <h2>{ props.title }</h2>
      <p>{ props.message }</p>
    </NotificationSection>
  )
}

const NotificationSection = styled.section<Pick<Props, "status">>`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  align-items: center;
  color: white;
  background-color: ${props => {
    if (props.status === "error") {
      return "#690000"
    }
    if (props.status === "success") {
      return "#1ad1b9"
    }
    return "#1a8ed1"
  }};
  
  h2, p {
    font-size: 1rem;
    margin: 0;
  }
`
