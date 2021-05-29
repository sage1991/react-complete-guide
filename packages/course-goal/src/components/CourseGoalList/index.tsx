import React, { FC } from "react";
import { CourseGoalItem } from "../CourseGoalItem";
import { Goal } from "../../model/Goal";
import "./CourseGoalList.css";


interface Props {
  items: Goal[];
  onDelete: (id: string) => void;
}

export const CourseGoalList: FC<Props> = ({ items, onDelete }) => {
  return (
    <ul className="goal-list">
      {
        items.map(goal => (
          <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDelete}>
            { goal.text }
          </CourseGoalItem>
        ))
      }
    </ul>
  );
};
