import React, { FC } from "react"
import { useParams } from "react-router-dom"


interface Params {
  id: string
}

export const ProductDetail: FC = (props) => {
  const params = useParams<Params>()

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{ params.id }</p>
    </section>
  )
}
