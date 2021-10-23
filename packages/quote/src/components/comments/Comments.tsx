import React, { FC, ReactNode, useEffect, useState } from "react"
import classes from "./Comments.module.css"
import { Button } from "../ui"
import { NewCommentForm } from "./NewCommentForm"
import { useApi } from "../../hooks"
import { fetchComments, postComment } from "../../api"
import { CommentsList } from "./CommentsList"


interface Props {
  quoteId: string
}

export const Comments: FC<Props> = (props) => {
  const [ isAdding, setIsAdding ] = useState<boolean>(false)
  const postCommentApi = useApi(postComment)
  const fetchCommentApi = useApi(fetchComments)

  useEffect(() => {
    fetchCommentApi.call(props.quoteId)
  }, [ fetchCommentApi.call, props.quoteId ])

  const onAddButtonClick = () => setIsAdding(true)

  const addComment = async (text: string) => {
    const { status } = await postCommentApi.call(props.quoteId, { text })
    if (status === "resolved") {
      setIsAdding(false)
      return fetchCommentApi.call(props.quoteId)
    }
  }

  let action: ReactNode = (
    <Button onClick={onAddButtonClick}>
      Add a Comment
    </Button>
  )
  if (isAdding) {
    action = <NewCommentForm addComment={addComment} />
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      { action }
      {
        fetchCommentApi.status === "resolved" &&
        <CommentsList comments={fetchCommentApi.data} />
      }
    </section>
  )
}
