import React, { FC, useEffect, useMemo } from "react"
import styled, { css, keyframes } from "styled-components"
import { createPortal } from "react-dom"


interface ModalProps {
  show: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const root = useMemo<HTMLDivElement>(() => document.createElement("div"), [])

  useEffect(() => {
    if (!props.show) return

    document.body.appendChild(root)
    return () => root.remove()
  }, [ root, props.show ])

  return (
    <>
      { createPortal(<Backdrop />, root) }
      { createPortal(<ModalOverlay show={props.show}>{ props.children }</ModalOverlay>, root) }
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`

const ModalOverlay = styled.div<ModalProps>`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  ${props => props.show && css`animation: ${slideDown} 300ms ease-out forwards;`} 
  
  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
