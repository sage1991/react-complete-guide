import React, { FC, ReactNode, useCallback, useEffect, useState } from "react"
import { MovieList } from "./components"
import { addMovies, fetchMovies } from "./api"
import { MovieModel } from "./models"
import { AddMovie } from "./components/AddMovie"
import "./App.css"


export const App: FC = () => {
  const [ movies, setMovies ] = useState<MovieModel[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<any>(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    try {
      const { results } = await fetchMovies()
      const __movies = results.map<MovieModel>((result) => {
        return {
          id: result.episode_id,
          title: result.title,
          openingText: result.opening_crawl,
          releaseDate: result.release_date
        }
      })
      setMovies(__movies)
      setError(null)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [ fetchMoviesHandler ])

  const addMovie = (movie: Omit<MovieModel, "id">) => {
    addMovies(movie)
      .then(({ name }) => {
        setMovies(prev => [ ...prev, { ...movie, id: name } ])
      })
  }

  let content: ReactNode = null
  if (isLoading) {
    content = <p>loading...</p>
  } else if (error) {
    content = <p>{ error }</p>
  } else if (movies.length === 0) {
    content = <p>Found no movies.</p>
  } else {
    content = <MovieList movies={movies} />
  }

  return (
    <>
      <section>
        <AddMovie addMovie={addMovie} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        { content }
      </section>
    </>
  )
}
