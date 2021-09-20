import React, { FC } from 'react'
import { Movie } from './Movie'
import { MovieModel } from "../models"
import classes from "./MovieList.module.css"


interface Props {
  movies: MovieModel[]
}

export const MovieList: FC<Props> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {
        props.movies.map(movie => {
          return (
            <Movie key={movie.id}
                   title={movie.title}
                   releaseDate={movie.releaseDate}
                   openingText={movie.openingText} />
          )
        })
      }
    </ul>
  )
}
