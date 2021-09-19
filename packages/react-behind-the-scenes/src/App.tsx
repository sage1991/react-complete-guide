import React, { FC, useCallback, useMemo, useState } from "react"
import { Button } from "./components/UI/Button"
import { DemoList, DemoOutput } from "./components/Demo"
import "./App.css"


export const App: FC = () => {
  const [ isShow, setIsShow ] = useState<boolean>(false)
  const [ isToggleAllowed, setIsToggleAllowed ] = useState<boolean>(false)
  const [ title, setTitle ] = useState<string>("this is title")

  const items = useMemo<number[]>(() => [2, 8, 6, 10, 4], [])

  const onToggleButtonClick = useCallback(() => setIsShow(prev => !prev), [])
  const onAllowToggleButtonClick = useCallback(() => setIsToggleAllowed(prev => !prev), [])
  const onChangeTitleButtonClick = useCallback(() => setTitle("Title Changed!"), [])

  console.log("App Component re-evaluated")

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShow} />
      <DemoOutput show={true} />
      <DemoList title={title} items={items} />
      <Button onClick={onToggleButtonClick} disabled={!isToggleAllowed}>toggle</Button>
      <Button onClick={onAllowToggleButtonClick}>allow toggle</Button>
      <Button onClick={onChangeTitleButtonClick}>change list title</Button>
    </div>
  );
}
