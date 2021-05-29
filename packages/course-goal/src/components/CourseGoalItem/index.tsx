import React, { FC } from "react";
import "./CourseGoalItem.css";


interface Props {
  id: string;
  onDelete: (id: string) => void;
}

export const CourseGoalItem: FC<Props> = ({ id, onDelete, children }) => {
  const onClick = () => {
    // setDeleteText("(Deleted!)")
    onDelete(id)
  }

  return (
    <li className="goal-item" onClick={onClick}>
      { children }
    </li>
  )
};
