import React, { FC } from "react"
import classes from "./CommentsList.module.css"
import { CommentItem } from "./CommentItem"
import { Comment } from "../../model"


interface Props {
  comments: Comment[]
}

export const CommentsList: FC<Props> = (props) => {
  const comments = props.comments.map(comment => {
    return <CommentItem key={comment.id} text={comment.text} />
  })

  return (
    <ul className={classes.comments}>
      { comments }
    </ul>
  )
}
