import React, { FC, useRef } from "react"
import { MovieModel } from "../models"
import classes from "./AddMovie.module.css"


interface Props {
  addMovie: (movie: Omit<MovieModel, "id">) => void
}

export const AddMovie: FC<Props> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    props.addMovie({
      title: titleRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
      openingText: openingTextRef.current!.value
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows={5} id='opening-text' ref={openingTextRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  )
}
