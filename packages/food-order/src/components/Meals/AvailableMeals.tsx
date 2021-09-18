import React, { FC } from "react"
import { Card } from "../UI"
import { MealItem } from "./MealItem"
import { MealItemModel } from "../../model"
import classes from "./AvailableMeals.module.css"


export const AvailableMeals: FC = () => {
  const meals = DUMMY_MEALS.map((meal) => {
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
        <ul>{ meals }</ul>
      </Card>
    </section>
  )
}

const DUMMY_MEALS: MealItemModel[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
