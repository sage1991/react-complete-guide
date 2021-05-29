import React, { FC } from "react";
import { Chart } from "../Chart";
import { ExpenseModel } from "../../model/ExpenseModel";


interface Props {
  expenses: ExpenseModel[];
}

export const ExpenseChart: FC<Props> = ({ expenses }) => {
  const data = [
    { label: "01월", value: 0 },
    { label: "02월", value: 0 },
    { label: "03월", value: 0 },
    { label: "04월", value: 0 },
    { label: "05월", value: 0 },
    { label: "06월", value: 0 },
    { label: "07월", value: 0 },
    { label: "08월", value: 0 },
    { label: "09월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 }
  ]

  for (const model of expenses) {
    const { date } = model
    data[date.getMonth()].value += model.amount  // 1월 -> 0, 2월 -> 1, ... , 12월 -> 11
  }

  return <Chart data={data} />
}
