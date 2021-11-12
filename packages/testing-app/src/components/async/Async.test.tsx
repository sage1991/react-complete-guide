import React from "react"
import { render, screen } from "@testing-library/react"
import { Async } from "./Async"


describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: async () => [
          { id: "post1", title: "This is Post 1" },
          { id: "post2", title: "This is Post 2" }
        ]
      })

    render(<Async />)

    const listItems = await screen.findAllByRole("listitem")
    expect(listItems).not.toHaveLength(0)
  })
})
