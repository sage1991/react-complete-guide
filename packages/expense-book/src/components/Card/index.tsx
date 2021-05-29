import React, { FC } from "react";
import "./Card.css";
import clsx from "clsx";


interface Props {
  className?: string;
}

export const Card: FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx("card", className)}>
      { children }
    </div>
  )
}
