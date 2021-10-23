import { Comment } from "../model"


export const fetchComments = async (quoteId: string): Promise<Comment[]> => {
  const response = await fetch(`https://react-burger-c56a9.firebaseio.com/comments/${quoteId}.json`)
  if (!response.ok) {
    throw new Error(`fetch comments fail with ${response.status}`)
  }
  const body = await response.json() as { [id: string]: Omit<Comment, "id"> } ?? {}
  return Object.entries(body).map<Comment>(([ id, text ]) => {
    console.log(id, text)
    return { id, ...text }
  })
}


export const postComment = async (quoteId: string, comment: Omit<Comment, "id">): Promise<string> => {
  const response = await fetch(`https://react-burger-c56a9.firebaseio.com/comments/${quoteId}.json`, {
    method: "post",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" }
  })
  if (!response.ok) {
    throw new Error(`post comment fail with ${response.status}`)
  }
  return response.json()
}
