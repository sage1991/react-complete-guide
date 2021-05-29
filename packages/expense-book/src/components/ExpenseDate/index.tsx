import React, { FC } from "react";
import "./ExpenseDate.css";


interface Props {
  date: Date;
}

export const ExpenseDate: FC<Props> = ({ date }) => {
  return (
    <div className="expense-date">
      <div className="expense-date__year">{ date.toLocaleString("ko-kr", { year: "numeric" }) }</div>
      <div className="expense-date__month">{ date.toLocaleString("ko-kr", { month: "long" }) }</div>
      <div className="expense-date__day">{ date.toLocaleString("ko-kr", { day: "numeric" }) }</div>
    </div>
  )
}
