import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Greeting } from "./Greeting"


describe("Greeting Component", () => {
  test("renders 'hello world' as a text", () => {
    render(<Greeting />)
    const target = screen.getByText(/hello world/i)
    expect(target).toBeInTheDocument()
  })

  test("renders 'good to see you' if button was NOT clicked", () => {
    render(<Greeting />)
    const target = screen.getByText("good to see you", { exact: false })
    expect(target).toBeInTheDocument()
  })

  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />)

    const button = screen.getByRole("button")
    userEvent.click(button)

    const text = screen.getByText(/changed/i)
    expect(text).toBeInTheDocument()
  })

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />)

    const button = screen.getByRole("button")
    userEvent.click(button)

    const text = screen.queryByText("good to see you", { exact: false })
    expect(text).toBeNull()
  })
})
