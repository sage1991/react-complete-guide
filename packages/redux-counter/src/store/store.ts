import { reducer as counterReducer } from "./counter"
import { reducer as authReducer } from "./auth"
import { configureStore, combineReducers } from "@reduxjs/toolkit"


const reducer = combineReducers({
  counter: counterReducer,
  auth: authReducer
})

export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof reducer>
export type RootDispatch = typeof store.dispatch

