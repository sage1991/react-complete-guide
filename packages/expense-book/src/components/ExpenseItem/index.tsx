import React, { FC } from "react";
import { ExpenseDate } from "../ExpenseDate";
import { Card } from "../Card";
import "./ExpenseItem.css";


interface Props {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem: FC<Props> = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{ title }</h2>
          <div className="expense-item__price">{ amount }원</div>
        </div>
      </Card>
    </li>
  )
}
