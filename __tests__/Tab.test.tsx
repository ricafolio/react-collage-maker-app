import EditingPanel from "../src/components/EditingPanel"
import store from "../src/redux/store"
import { render, screen, cleanup } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { describe, it, expect, afterEach, beforeEach } from "vitest"

function assertButtonWithText(text: string) {
  const buttonText = screen.queryByText(text)
  const buttonElement = buttonText?.closest("button")
  
  expect(buttonText).not.toBeNull()
  expect(buttonText?.tagName).toBe("SPAN")
  expect(buttonElement?.tagName).toBe("BUTTON")
}

describe("Tabs renders correctly", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <EditingPanel />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("Should have Template tab", () => {
    assertButtonWithText("Template")
  })

  it("Should have Ratio tab", () => {
    assertButtonWithText("Ratio")
  })

  it("Should have Filters tab", () => {
    assertButtonWithText("Filters")
  })
})
