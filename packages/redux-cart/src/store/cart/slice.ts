import { createSlice } from "@reduxjs/toolkit"
import { CartItemModel } from "../../model"
import { addItem, fetchCart, removeItem, updateCart } from "./actions"
import {
  addItemReducer, fetchCartSuccessReducer,
  removeItemReducer,
  updateCartFailReducer,
  updateCartPendingReducer,
  updateCartSuccessReducer
} from "./reducer"


export interface CartState {
  items: CartItemModel[]
  totalQuantity: number
  notification?: {
    status: "error" | "success" | "pending"
    title: string
    message: string
  }
}

const INITIAL_STATE: CartState = {
  items: [],
  totalQuantity: 0,
  notification: undefined
}

const slice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateCart.pending, updateCartPendingReducer)
      .addCase(updateCart.rejected, updateCartFailReducer)
      .addCase(updateCart.fulfilled, updateCartSuccessReducer)
      .addCase(fetchCart.fulfilled, fetchCartSuccessReducer)
      .addCase(addItem, addItemReducer)
      .addCase(removeItem, removeItemReducer)
  }
})

export const { reducer: cart } = slice
export type CartReducer = typeof cart
