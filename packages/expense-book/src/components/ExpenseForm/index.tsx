import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./ExpenseForm.css";


interface Props {
  onSubmit: (title: string, amount: number, date: Date) => void;
}

export const ExpenseForm: FC<Props> = ({ onSubmit }) => {
  const [ title, setTitle ] = useState<string>("")
  const [ amount, setAmount ] = useState<string>("")
  const [ date, setDate ] = useState<string>("")
  const [ edit, setEdit ] = useState<boolean>(false)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    switch (name) {
      case "title":
        setTitle(value)
        break;
      case "amount":
        setAmount(value)
        break;
      case "date":
      default:
        setDate(value)
        break;
    }
  }

  const _onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(title, +amount, new Date(date))
    setTitle("")
    setAmount("")
    setDate("")
  }

  const onCancelButtonClick = () => setEdit(false)
  const onEditButtonClick = () => setEdit(true)

  if (edit) {
    return (
      <form onSubmit={_onSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">제목</label>
            <input id="title" name="title" type="text"
                   value={title} onChange={onInputChange} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">금액</label>
            <input id="amount" name="amount" type="number" min="0" max="1000000000" step="1"
                   value={amount} onChange={onInputChange} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">일자</label>
            <input id="date" name="date" type="date" min="2019-01-01" max="2022-12-31"
                   value={date} onChange={onInputChange} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={onCancelButtonClick}>취소</button>
          <button type="submit">추가</button>
        </div>
      </form>
    )
  }

  return (
    <button type="button" onClick={onEditButtonClick}>지출 추가하기</button>
  )
}
