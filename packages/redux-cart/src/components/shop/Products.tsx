import React, { FC } from "react"
import { ProductItem } from "./ProductItem"
import { ProductModel } from "../../model"
import { addItem, useDispatch } from "../../store"
import classes from "./Products.module.css"


export const Products: FC = () => {
  const dispatch = useDispatch()
  const productList = DUMMY_PRODUCTS.map((product) => <ProductItem key={product.id} {...product} />)

  const onAddButtonClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const { productId } = (e.target as HTMLElement).dataset
    const product = DUMMY_PRODUCTS.find(({ id }) => id === productId)
    if (product) {
      dispatch(addItem(product))
    }
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul onClick={onAddButtonClick}>
        { productList }
      </ul>
    </section>
  )
}


const DUMMY_PRODUCTS: ProductModel[] = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "The first book I ever write"
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 5,
    description: "The Second book I ever write"
  }
]
