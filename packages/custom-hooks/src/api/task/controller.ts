import { AddTaskRequest, AddTaskResponse, FetchTaskResponse } from "./model"


export const addTask = (request: AddTaskRequest): Promise<AddTaskResponse> => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/tasks.json", {
      method: "POST",
      body: JSON.stringify(request),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`http request fail with status code: ${response.status}`)
        }

        return response.json()
      })
  )
}


export const fetchTasks = (): Promise<FetchTaskResponse> => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/tasks.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`http request fail with status code: ${response.status}`)
        }

        return response.json()
      })
  )
}
