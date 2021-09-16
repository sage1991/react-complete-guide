import React, { FC } from "react"
import { MealsSummary } from "./MealsSummary"
import { AvailableMeals } from "./AvailableMeals"


export const Meals: FC = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}
