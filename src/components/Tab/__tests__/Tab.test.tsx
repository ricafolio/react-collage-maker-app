import TabPanel from "@/components/Tab/TabPanel"
import store from "@/redux/store"
import { FilterIdType } from "@/types"

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
  // find template / ratio button
  const buttonText = screen.queryByText(tab)
  const buttonElement = buttonText?.closest("button")
  
  if (buttonElement) {
    // Click Template tab
    fireEvent.click(buttonElement)

    // Get Tab content
    const tabContentElement = screen.getByTestId("tabContent")
    const templateButtons = tabContentElement.querySelectorAll("button")

    // Should have X templates
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
        <TabPanel />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("Should have Template tab", () => {
    assertButtonWithText("template")
  })

  it("Should have Ratio tab", () => {
    assertButtonWithText("ratio")
  })

  it("Should have Filters tab", () => {
    assertButtonWithText("filters")
  })
})

describe("Tabs content renders correctly", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TabPanel />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("Template should show 10 options", () => {
    assertTabContent("template", 10)
  })

  it("Ratio should show 8 options", () => {
    assertTabContent("ratio", 8)
  })

  it("Filters should show 6 controls", () => {
    const filterId: FilterIdType[] = [
      "Brightness",
      "Contrast",
      "Noise",
      "Saturation",
      "Vibrance",
      "Blur"
    ]

    // mock window
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({
        matches: false,
      })
    })

    // find filter tab button
    const buttonText = screen.queryByText("filters")
    const buttonElement = buttonText?.closest("button")

    if (buttonElement) {
      // Click filter tab
      fireEvent.click(buttonElement)

      // Get filter tab content
      const tabContentElement = screen.getByTestId("tabContent")

      // Should have 6 input element
      const filterSliderInput = tabContentElement.querySelectorAll("input")
      expect(filterSliderInput).toHaveLength(filterId.length)

      filterSliderInput.forEach((input) => {
        // Should have range type
        expect(input).toHaveProperty("type")
        expect(input.type).toBe("range")

        // Should have these properties
        expect(input).toHaveProperty("id")
        expect(input).toHaveProperty("min")
        expect(input).toHaveProperty("max")
        expect(input).toHaveProperty("step")
        expect(input).toHaveProperty("value")

        // Should have one of the filter id
        expect(filterId.includes(input.id as FilterIdType)).toBe(true)
      })
    }
  })
})
