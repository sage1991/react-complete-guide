import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { CartItemModel, ProductModel } from "../../model"
import * as api from "../../api"


export const addItem = createAction<Omit<ProductModel, "description">>("cart/addItem")

export const removeItem = createAction<string>("cart/removeItem")

export const updateCart = createAsyncThunk<CartItemModel[], CartItemModel[]>("cart/updateCart", (arg, thunkAPI) => {
  return api.updateCart(arg)
});

export const fetchCart = createAsyncThunk<CartItemModel[]>("cart/fetchCart", () => {
  return api.fetchCart()
})
