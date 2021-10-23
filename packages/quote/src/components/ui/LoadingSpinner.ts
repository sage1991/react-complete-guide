import styled, { css, keyframes } from "styled-components"


export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  
  &:after {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid teal;
    border-color: teal transparent teal transparent;
    ${props => css`animation: ${spinner} 1.2s linear infinite;`}
  }
`

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
