import React, { FC, useCallback, useEffect, useState } from "react"
import { BackwardCounter, ForwardCounter } from "./components/Counter"
import { Task } from "./model"
import { fetchTasks } from "./api/task"
import { NewTask } from "./components/NewTask"
import { Tasks } from "./components/Tasks"
import { useAPI } from "./hooks"


export const App: FC = () => {
  const [ tasks, setTasks ] = useState<Task[]>([])
  const { loading, error, api } = useAPI(fetchTasks)

  const fetchTaskHandler = useCallback(async () => {
    const response = await api()
    if (!response) return

    const __tasks = Object.entries(response)
      .map<Task>(([ id, { text } ]) => {
        return { id, text }
      })
    setTasks(__tasks)
  }, [ api ])

  useEffect(() => {
    fetchTaskHandler()
  }, [ fetchTaskHandler ])

  const onAddTask = (task: Task) => setTasks(prev => [ ...prev, task ])

  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
      <NewTask onAddTask={onAddTask} />
      <Tasks
        items={tasks}
        loading={loading}
        error={error}
        refresh={fetchTaskHandler}
      />
    </>
  );
}
