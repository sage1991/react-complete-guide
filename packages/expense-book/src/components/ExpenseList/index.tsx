import React, { FC } from "react";
import { ExpenseModel } from "../../model/ExpenseModel";
import { ExpenseItem } from "../ExpenseItem";
import "./ExpenseList.css";


interface Props {
  expenses: ExpenseModel[]
}

export const ExpenseList: FC<Props> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">해당 기간에는 지출이 없습니다.</h2>
  }

  return (
    <ul className="expenses-list">
      { expenses.map(({ id, ...data }) => <ExpenseItem key={id} {...data} />) }
    </ul>
  )
}
