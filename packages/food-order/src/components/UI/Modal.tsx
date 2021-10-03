import React, { FC, useEffect, useMemo } from "react"
import styled, { css, keyframes } from "styled-components"
import { createPortal } from "react-dom"


export interface ModalProps {
  show: boolean
  onBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Modal: FC<ModalProps> = (props) => {
  const root = useMemo<HTMLDivElement>(() => document.createElement("div"), [])

  useEffect(() => {
    if (!props.show) return

    document.body.appendChild(root)

    return () => {
      const onAnimationEnd = (e: AnimationEvent) => {
        if (e.animationName === fadeOut.getName()) {
          root.remove()
          root.removeEventListener("animationend", onAnimationEnd)
        }
      }
      root.addEventListener("animationend", onAnimationEnd)
    }
  }, [ root, props.show ])

  return (
    <>
      { createPortal(<Backdrop onClick={props.onBackdropClick} show={props.show} />, root) }
      { createPortal(<ModalOverlay show={props.show}>{ props.children }</ModalOverlay>, root) }
    </>
  )
}

const Backdrop = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  ${props => css`animation: ${props.show ? fadeIn : fadeOut} 200ms ease-out forwards;`}
`

const ModalOverlay = styled.div<ModalProps>`
  position: fixed;
  top: 15vh;
  left: 5%;
  width: 90%;
  max-height: 70vh;
  background-color: white;
  overflow: scroll;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  ${props => css`animation: ${props.show ? fadeIn : fadeOut} 200ms ease-out forwards;`}
  
  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
