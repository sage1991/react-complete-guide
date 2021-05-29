import React, { useState } from "react";
import { CourseGoalList } from "./components/CourseGoalList";
import { CourseInput } from "./components/CourseInput";
import "./App.css";
import { Goal } from "./model/Goal";


let index: number = 3;

export const App = () => {
  const [ courseGoals, setCourseGoals ] = useState<Goal[]>([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" }
  ]);

  const addGoal = (enteredText: string) => {
    setCourseGoals(prevGoals => {
      return [
        { text: enteredText, id: `g${index++}` },
        ...prevGoals
      ]
    })
  }

  const deleteGoal = (id: string) => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== id)
    })
  }

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDelete={deleteGoal} />
    )
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoal} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  )
}
