import React, { FC, useState } from "react"
import classes from "./QuoteForm.module.css"
import { Card, LoadingSpinner, Button } from "../ui"
import { Quote } from "../../model"
import { Prompt } from "react-router-dom"


interface Props {
  loading?: boolean
  addQuote: (quote: Omit<Quote, "id">) => void
}

export const QuoteForm: FC<Props> = (props) => {
  const [ author, setAuthor ] = useState<string>("")
  const [ text, setText ] = useState<string>("")
  const [ isTouched, setIsTouched ] = useState<boolean>(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTouched(false)
    setTimeout(() => props.addQuote({ text, author }), 0)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "author") {
      setAuthor(e.target.value)
    } else {
      setText(e.target.value)
    }
    if (!isTouched) {
      setIsTouched(true)
    }
  }

  let loading = props.loading && (
    <div className={classes.loading}>
      <LoadingSpinner />
    </div>
  )

  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={onSubmit}>
          { loading }
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={onInputChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              name="text"
              rows={5}
              value={text}
              onChange={onInputChange}
            />
          </div>
          <div className={classes.actions}>
            <Button>Add Quote</Button>
          </div>
        </form>
      </Card>
      <Prompt
        when={isTouched}
        message={location => "Are you shre you want to leave? All your entered data will be lost"}
      />
    </>
  )
}
