import React, { Component } from "react"


interface State {
  error: Error | null
}

export class CommonErrorBoundary extends Component<any, State> {
  state: State = { error: null }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong...</p>
    }
    return this.props.children
  }
}
