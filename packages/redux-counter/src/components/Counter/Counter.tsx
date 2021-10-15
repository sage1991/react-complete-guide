import React, { Component, FC } from "react"
import { Button } from "../UI"
import { connect, ConnectedProps } from "react-redux"
import { RootState, useSelector, useDispatch } from "../../store"
import { actions as counterAction } from "../../store/counter"
import classes from "./Counter.module.css"


export const Counter: FC = () => {
  const counter = useSelector<number>(state => state.counter.counter)
  const hidden = useSelector<boolean>(state => state.counter.hidden)
  const dispatch = useDispatch()

  const onMutateButtonClick = (type: "increment" | "decrement", payload?: number) => () => dispatch(counterAction[type](payload))
  const onToggleButtonClick = () => dispatch(counterAction.toggle())

  return (
    <main className={classes.counter}>
      <h1>Redux Counter - Functional Component</h1>
      { !hidden && <div className={classes.value}>{ counter }</div> }
      <div className={classes.actions}>
        <Button onClick={onMutateButtonClick("increment")}>increment</Button>
        <Button onClick={onMutateButtonClick("increment", 5)}>increment by 5</Button>
        <Button onClick={onMutateButtonClick("decrement")}>decrement</Button>
        <Button onClick={onMutateButtonClick("decrement", 6)}>decrement by 6</Button>
        <Button onClick={onToggleButtonClick}>Toggle Counter</Button>
      </div>
    </main>
  )
}




////////////////////////////////////////////////////////////////////////////////
// Class based component example
////////////////////////////////////////////////////////////////////////////////
interface CounterComponentProps extends PropsFromStore {

}

class CounterComponent extends Component<CounterComponentProps, {}> {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter - Class Component</h1>
        {
          !this.props.hidden &&
          <div className={classes.value}>{ this.props.counter }</div>
        }
        <div className={classes.actions}>
          <Button onClick={this.props.increment}>increment</Button>
          <Button onClick={this.props.decrement}>decrement</Button>
          <Button onClick={this.props.toggle}>Toggle Counter</Button>
        </div>
      </main>
    )
  }
}


const mapStateToProps = (state: RootState) => {
  return { counter: state.counter.counter, hidden: state.counter.hidden }
}

const mapDispatchToProps = {
  increment: () => counterAction.increment(),
  decrement: () => counterAction.decrement(),
  toggle: () => counterAction.toggle()
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export const CounterContainer = connector(CounterComponent)
type PropsFromStore = ConnectedProps<typeof connector>
