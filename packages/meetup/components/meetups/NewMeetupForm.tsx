import classes from "./NewMeetupForm.module.css"
import React, { FC, useRef } from "react"
import { Card } from "../ui"


interface Props {
  addMeetup: (meetup: any) => void;
}

export const NewMeetupForm: FC<Props> = (props) => {
  const title = useRef<HTMLInputElement>(null)
  const image = useRef<HTMLInputElement>(null)
  const address = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.addMeetup({
      title: title.current!.value,
      image: image.current!.value,
      address: address.current!.value,
      description: description.current!.value
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={title} id="title" name="title" type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={image} id="image" name="image" type="url" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input ref={address} id="address" name="address" type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea ref={description} id="description" name="description" rows={5} required />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
