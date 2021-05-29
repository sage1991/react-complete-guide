import React, { FC } from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";


interface Props {
  data: {
    value: number;
    label: string;
  }[];
}

export const Chart: FC<Props> = ({ data }) => {
  const maximum = Math.max(...data.map(({ value }) => value))

  return (
    <div className="chart">
      {
        data.map((point) => <ChartBar {...point} maximum={maximum} />)
      }
    </div>
  )
}
