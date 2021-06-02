import React, { FC } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import classes from "./ErrorModal.module.css";


interface Props {
  title: string;
  message: string;
  close: () => void;
}

export const ErrorModal: FC<Props> = ({ title, message, close }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={close} />
      <Card className={classes.modal}>
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
  )
}

