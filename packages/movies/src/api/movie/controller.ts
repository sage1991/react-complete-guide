import { FetchMovieResponse } from "./model"
import { MovieModel } from "../../models"


export const fetchMovies = (): Promise<FetchMovieResponse> => {
  return (
    fetch("https://swapi.dev/api/films")
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error("Something went wrong...")
      })
  )
}


export const addMovies = (movie: Omit<MovieModel, "id">): Promise<{ name: string }> => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Something went wrong...")
    })
  )
}
