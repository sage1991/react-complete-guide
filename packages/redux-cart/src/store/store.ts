import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cart } from "./cart"


const reducer = combineReducers({ cart })
export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof reducer>
export type RootDispatch = typeof store.dispatch
