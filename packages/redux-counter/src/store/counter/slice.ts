import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface CounterState {
  counter: number
  hidden: boolean
}

const increment: CaseReducer<CounterState, PayloadAction<number | undefined>> = (state, action) => {
  state.counter = state.counter + (action.payload ?? 1)
}

const decrement: CaseReducer<CounterState, PayloadAction<number | undefined>> = (state, action) => {
  state.counter = state.counter - (action.payload ?? 1)
}

const toggle: CaseReducer<CounterState, PayloadAction> = (state) => {
  state.hidden = !state.hidden
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  hidden: false
}

const slice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment,
    decrement,
    toggle
  }
})

export const { actions, reducer } = slice
export type CounterAction = typeof actions
