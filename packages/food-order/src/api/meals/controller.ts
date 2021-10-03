import { FetchMealsResponse } from "./model"

export const fetchMeals = (): Promise<FetchMealsResponse> => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/meals.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`request failed with status ${response.status}`)
        }
        return response.json()
      })
  )
}
