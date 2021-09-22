export interface AddTaskRequest {
  text: string
}

export interface AddTaskResponse {
  name: string
}

export type FetchTaskResponse = null | { [id: string]: { text: string } }
