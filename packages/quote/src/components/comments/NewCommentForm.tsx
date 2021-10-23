import React, { FC, useState } from "react"
import classes from "./NewCommentForm.module.css"
import { Button } from "../ui"


interface Props {
  addComment: (text: string) => void
}

export const NewCommentForm: FC<Props> = (props) => {
  const [ comment, setComment ] = useState<string>("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.addComment(comment)
  }

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          name="comment"
          id="comment"
          rows={5}
          value={comment}
          onChange={onTextAreaChange}
        />
      </div>
      <div className={classes.actions}>
        <Button>Add Comment</Button>
      </div>
    </form>
  )
}
