import React, { Component, ReactNode } from "react"
import { UserModel } from "../model"
import { User } from "./User"
import classes from "./Users.module.css"


interface Props {
  users: UserModel[]
}

interface State {
  show: boolean
}

export class Users extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { show: true }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    if (this.props.users.length === 0) {
      throw new Error("Some Error!!")
    }
  }

  private onToggleButtonClick = () => this.setState(prev => ({ show: !prev.show }))

  render() {
    let userList: ReactNode = null
    if (this.state.show) {
      userList = (
        <ul>
          { this.props.users.map(user => <User key={user.id} name={user.name} />) }
        </ul>
      )
    }

    return (
      <div className={classes.users}>
        <button onClick={this.onToggleButtonClick}>
          { this.state.show ? "Hide" : "Show" } Users
        </button>
        { userList }
      </div>
    )
  }
}
