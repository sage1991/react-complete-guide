import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CartState } from "./slice"
import { CartItemModel, ProductModel } from "../../model"


export const addItemReducer: CaseReducer<CartState, PayloadAction<Omit<ProductModel, "description">>> = (state, action) => {
  state.totalQuantity++

  const sameItem = state.items.find((item) => item.id === action.payload.id)
  if (sameItem) {
    sameItem.quantity++
    sameItem.total = sameItem.price * sameItem.quantity
    return
  }

  state.items.push({
    ...action.payload,
    total: action.payload.price,
    quantity: 1
  })
}

export const removeItemReducer: CaseReducer<CartState, PayloadAction<string>> = (state, action) => {
  const item = state.items.find((item) => item.id === action.payload)
  if (!item) return

  state.totalQuantity--
  item.quantity--
  item.total = item.price * item.quantity

  if (item.quantity <= 0) {
    state.items = state.items.filter(__item => __item !== item)
  }
}

export const updateCartPendingReducer: CaseReducer<CartState> = (state, action) => {
  state.notification = {
    status: "pending",
    title: "Sending...",
    message: "Sending cart data!"
  }
}

export const updateCartFailReducer: CaseReducer<CartState> = (state) => {
  state.notification = {
    status: "error",
    title: "Error!",
    message: "Sending cart data failed!"
  }
}

export const updateCartSuccessReducer: CaseReducer<CartState> = (state) => {
  state.notification = {
    status: "success",
    title: "Success!",
    message: "Sent cart data successfully!"
  }
}

export const fetchCartSuccessReducer: CaseReducer<CartState, PayloadAction<CartItemModel[]>> = (state, action) => {
  state.items = action.payload
  state.totalQuantity = action.payload.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
}
