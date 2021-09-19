import React, { FC, memo, useMemo } from "react"
import classes from "./DemoList.module.css"


interface Props {
  title: string
  items: number[]
}

export const DemoList: FC<Props> = memo((props) => {
  const sortedItems = useMemo<number[]>(() => {
    return [ ...props.items ].sort((prev, next) => prev - next)
  }, [ props.items ])

  return (
    <div className={classes.list}>
      <h2>{ props.title }</h2>
      <ul>
        { sortedItems.map(item => <li key={item}>{ item }</li>) }
      </ul>
    </div>
  )
})
