import React, { Component } from "react"
import { Users } from "./Users"
import { UserModel } from "../model"
import classes from "./UserFinder.module.css"


interface Props {
  users: UserModel[]
}

interface State {
  term: string
  filteredUsers: UserModel[]
}

export class UserFinder extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { filteredUsers: [ ...this.props.users ], term: "" }
  }

  componentDidMount() {
    console.log("UserFinder Component did mount")
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any) {
    console.log("UserFinder Component did update")
    if (prevState.term !== this.state.term) {
      this.setState({ filteredUsers: this.props.users.filter((user: UserModel) => user.name.includes(this.state.term)) })
    }
  }

  componentWillUnmount() {
    console.log("UserFinder Component will unmount")
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ term: e.target.value })

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type='search' onChange={this.onInputChange} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    )
  }
}
