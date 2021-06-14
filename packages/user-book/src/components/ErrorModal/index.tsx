import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Card } from "../Card";
import { Button } from "../Button";
import classes from "./ErrorModal.module.css";
import styled from "styled-components";
import clsx from "clsx";



interface Props {
  title: string;
  message: string;
  open: boolean;
  close: () => void;
}

export const ErrorModal: FC<Props> = ({ title, message, close, open }) => {
  const root = useRef<HTMLDivElement>(document.createElement("div"))

  useEffect(() => {
    document.body.appendChild(root.current)

    const onModalClose = (e: AnimationEvent) => {
      if (e.animationName === classes["hide-modal-animation"]) {
        root.current.remove()
      }
    }

    root.current.addEventListener("animationend", onModalClose, { once: true })

    return () => {
      root.current.removeEventListener("animationend", onModalClose)
    }
  }, [ open ])

  return createPortal((
    <>
      <Backdrop onClick={close} />
      <Card className={clsx(classes.modal, { [classes.open]: open, [classes.close]: !open })}>
        <header className={classes.header}>
          <h2>{ title }</h2>
        </header>
        <div className={classes.content}>
          <p>{ message }</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={close}>OK</Button>
        </footer>
      </Card>
    </>
  ), root.current)
}


export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`
