import React, { FC } from "react";
import "./ChartBar.css";


interface Props {
  value: number;
  label: string;
  maximum: number;
}

export const ChartBar: FC<Props> = ({ value, label, maximum }) => {
  let height: number = maximum > 0 ? Math.round((value / maximum) * 100) : 0

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${height}%` }} />
      </div>
      <div className="chart-bar__label">{ label }</div>
    </div>
  )
}
