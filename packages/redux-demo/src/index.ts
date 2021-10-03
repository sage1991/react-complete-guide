import { createStore, Reducer } from "redux"


const counterReducer: Reducer<number> = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1
  }

  if (action.type === "DECREMENT") {
    return state - 1
  }

  if (action.type === "SQUARE") {
    return Math.pow(state, 2)
  }

  return state
}

const store = createStore(counterReducer)

const counterSubscriber = () => {
  const state = store.getState()
  console.log(state)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "SQUARE" })
store.dispatch({ type: "DECREMENT" })

