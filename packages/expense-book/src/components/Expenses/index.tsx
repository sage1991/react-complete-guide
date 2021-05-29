import React, { FC, useState } from "react";
import { Card } from "../Card";
import { ExpensesFilter } from "../ExpenseFilter";
import "./Expenses.css";
import { ExpenseList } from "../ExpenseList";
import { ExpenseChart } from "../ExpenseChart";


interface Props {
  items: { id: string; title: string; amount: number; date: Date; }[];
}

export const Expenses: FC<Props> = ({ items }) => {
  const [ year, setYear ] = useState<string>("2019")

  const expenses = items.filter(({ date }) => `${date.getFullYear()}` === year)

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onFilterChange={setYear} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </Card>
  )
}

