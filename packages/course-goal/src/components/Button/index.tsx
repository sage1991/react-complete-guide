import React, { FC } from "react";
import styled from "styled-components";
import classes from "./Button.module.css";


// export const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//
//   &:focus {
//     outline: none;
//   }
//
//   &:hover, &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
//
//   @media (min-width: 768px) {
//     width: auto;
//   }
// `


interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: FC<Props> = ({ children, type, onClick }) => {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      { children }
    </button>
  )
}
