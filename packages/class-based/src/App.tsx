import React, { Component } from "react"
import { UserFinder } from "./components/UserFinder"
import { UserProvider, UserConsumer } from "./store/user"
import { CommonErrorBoundary } from "./components/boundary"


export class App extends Component<{}, {}> {

  componentDidMount() {
    console.log("App Component did mount")
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
    console.log("App Component did update")
  }

  componentWillUnmount() {
    console.log("App Component will unmount")
  }

  render() {
    return (
      <CommonErrorBoundary>
        <UserProvider>
          <UserConsumer>
            { (data) => <UserFinder users={data.users} /> }
          </UserConsumer>
        </UserProvider>
      </CommonErrorBoundary>
    )
  }
}
