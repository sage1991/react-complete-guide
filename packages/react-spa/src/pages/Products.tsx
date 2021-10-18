import React, { FC } from "react"
import { Link } from "react-router-dom"


export const Products: FC = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/carpet">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/online-course">A Online Course</Link>
        </li>
      </ul>
    </section>
  )
}
