import React, { FC, useEffect, useState } from "react"
import { Card } from "../UI"
import { MealItem } from "./MealItem"
import { MealModel } from "../../model"
import { useApi } from "../../hooks/useApi"
import { fetchMeals } from "../../api/meals"
import classes from "./AvailableMeals.module.css"


export const AvailableMeals: FC = () => {
  const [ meals, setMeals ] = useState<MealModel[]>([])

  const api = useApi(fetchMeals)
  useEffect(() => {
    api
      .request()
      .then(response => {
        const __meals = Object.entries(response).map<MealModel>(([ key, value ]) => {
          return {
            id: key,
            name: value.name,
            description: value.description,
            price: value.price
          }
        })
        setMeals(__meals)
      })
  }, [ api.request ])


  if (api.loading) {
    return (
      <section className={classes["meals-loading"]}>
        <p>Loading...</p>
      </section>
    )
  }

  if (api.error) {
    return (
      <section className={classes["meals-error"]}>
        <p>{ api.error }</p>
      </section>
    )
  }

  const mealItems = meals.map((meal) => {
    return (
      <MealItem key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price} />
    )
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{ mealItems }</ul>
      </Card>
    </section>
  )
}
