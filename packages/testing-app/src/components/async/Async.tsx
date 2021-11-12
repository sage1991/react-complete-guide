import React, { FC, useEffect, useState } from "react"


export const Async: FC = () => {
  const [ posts, setPosts ] = useState<any[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <ul>
        { posts.map(post => (<li key={post.id}>{ post.title }</li>)) }
      </ul>
    </div>
  )
}
