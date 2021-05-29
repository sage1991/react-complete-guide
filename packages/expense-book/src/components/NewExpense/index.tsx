import React, { FC } from "react";
import "./NewExpense.css";


export const NewExpense: FC = ({ children }) => {
  return (
    <div className="new-expense">
      { children }
    </div>
  )
}
