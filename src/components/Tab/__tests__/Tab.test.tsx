import store from "../../../redux/store"
import EditingPanel from "../TabPanel"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { describe, it, expect, afterEach, beforeEach } from "vitest"

function assertButtonWithText(text: string) {
  const buttonText = screen.queryByText(text)
  const buttonElement = buttonText?.closest("button")

  expect(buttonText).not.toBeNull()
  expect(buttonText?.tagName).toBe("SPAN")
  expect(buttonElement?.tagName).toBe("BUTTON")
}

function assertTabContent(tab: string, numberOfButtons: number) {
  const buttonText = screen.queryByText(tab)
  const buttonElement = buttonText?.closest("button")
  if (buttonElement) {
    // Click Template tab
    fireEvent.click(buttonElement)

    // Get Tab content
    const tabContentElement = screen.getByTestId("tabContent")
    const templateButtons = tabContentElement.querySelectorAll("button")

    // Should have 10 templates
    expect(templateButtons).toHaveLength(numberOfButtons)

    // Should have icons inside buttons
    templateButtons.forEach((button) => {
      const imgIcon = button.querySelector("img")
      expect(imgIcon).not.toBeNull()
    })
  }
}

describe("Tabs renders correctly", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <EditingPanel />
      </Provider>,
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

describe("Tabs content renders correctly", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <EditingPanel />
      </Provider>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("Template should show 10 options", () => {
    assertTabContent("Template", 10)
  })

  it("Ratio should show 8 options", () => {
    assertTabContent("Ratio", 8)
  })
})
