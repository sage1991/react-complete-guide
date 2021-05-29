import React, { FC, MouseEvent } from "react";
import "./Button.css";


interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<Props> = ({ type, onClick, children }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      { children }
    </button>
  );
};
