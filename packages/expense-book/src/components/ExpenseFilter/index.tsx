import React, { ChangeEvent, FC } from 'react';
import './ExpenseFilter.css';


interface Props {
  year: string;
  onFilterChange: (year: string) => void;
}

export const ExpensesFilter: FC<Props> = ({ year, onFilterChange }) => {
  const onYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    onFilterChange(value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>연도별 필터링</label>
        <select value={year} onChange={onYearChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
