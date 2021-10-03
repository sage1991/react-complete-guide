import React, { FC, useReducer } from "react"
import { CartItemModel } from "../../model"
import { cartReducer } from "./reducer"


export interface Cart {
  items: CartItemModel[]
  totalAmount: number
  addItem: (item: CartItemModel) => void
  removeItem: (id: string) => void
  clear: () => void
}

// @ts-ignore
export const CartContext = React.createContext<Cart>()

export const CartProvider: FC = ({ children }) => {
  const [ items, dispatch ] = useReducer(cartReducer, [])
  const totalAmount: number = +items.reduce((acc, value) => acc + (value.amount * value.price), 0).toFixed(2)

  const addItem = (payload: CartItemModel) => {
    const model = items.find(__item => __item.id === payload.id)
    if (model) {
      dispatch({ type: "CHANGE_CART_ITEM_AMOUNT", payload: { id: payload.id, amount: payload.amount } })
    } else {
      dispatch({ type: "ADD_CART_ITEM", payload })
    }
  }

  const removeItem = (id: string) => {
    const model = items.find(__item => __item.id === id)
    if (!model) return

    if (model.amount <= 1) {
      dispatch({ type: "REMOVE_CART_ITEM", payload: id })
    } else {
      dispatch({ type: "CHANGE_CART_ITEM_AMOUNT", payload: { id: id, amount: -1 } })
    }
  }

  const clear = () => dispatch({ type: "CLEAR_CART" })

  return (
    <CartContext.Provider value={{ items, totalAmount, addItem, removeItem, clear }}>
      { children }
    </CartContext.Provider>
  )
}
