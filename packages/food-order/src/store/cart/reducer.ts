import { Reducer } from "react"
import { CartItemModel } from "../../model"


type CartAction = AddCartItemAction | RemoveCartItemAction | ChangeCartItemAmountAction

interface AddCartItemAction {
  type: "ADD_CART_ITEM"
  payload: CartItemModel
}

interface RemoveCartItemAction {
  type: "REMOVE_CART_ITEM"
  payload: string
}

interface ChangeCartItemAmountAction {
  type: "CHANGE_CART_ITEM_AMOUNT"
  payload: {
    id: string
    amount: number
  }
}

export const cartReducer: Reducer<CartItemModel[], CartAction> = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [ ...state, action.payload ]
    case "REMOVE_CART_ITEM":
      return state.filter(item => item.id !== action.payload)
    case "CHANGE_CART_ITEM_AMOUNT":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount + action.payload.amount
          }
        }
        return item
      })
    default:
      return state
  }
}
