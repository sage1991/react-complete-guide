import React, { FC, useState } from 'react';
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseModel } from "./model/ExpenseModel";


let index: number = 5;

const INITIAL_EXPENSES: ExpenseModel[] = [
  { id: "expense-1", title: "씨유 풍림", amount: 5000, date: new Date(2021, 1, 2) },
  { id: "expense-2", title: "GS 25 시흥4동점", amount: 4000, date: new Date(2021, 2, 7) },
  { id: "expense-3", title: "보나조이 구로디지털단지점", amount: 32500, date: new Date(2021, 3, 10) },
  { id: "expense-4", title: "스타벅스 금천점", amount: 20000, date: new Date(2021, 4, 12) },
]

const App: FC = () => {
  const [ items, setItems ] = useState<ExpenseModel[]>(INITIAL_EXPENSES)

  const onSubmit = (title: string, amount: number, date: Date) => {
    const data: ExpenseModel = {
      id: `expense-${index++}`,
      title,
      amount,
      date
    }
    setItems((prev) => [ ...prev, data ])
  }

  return (
    <div>
      <NewExpense>
        <ExpenseForm onSubmit={onSubmit} />
      </NewExpense>
      <Expenses items={items} />
    </div>
  )
}

export default App;
