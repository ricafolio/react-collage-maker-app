import { setupMatchMediaMock } from "@/components/Tab/__tests__/__mocks__/setupMatchMediaMock"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import { describe, it, expect, afterEach, beforeEach } from "vitest"
import { Provider } from "react-redux"

import TabFilters from "@/components/Tab/TabFilters"
import TabPanel from "@/components/Tab/TabPanel"
import store from "@/redux/store"

import type { FilterIdType } from "@/types"

describe("[Desktop] Filter renders correctly", () => {
  beforeEach(() => {
    setupMatchMediaMock()

    // set as 1024px device
    window.innerWidth = 1024

    render(
      <Provider store={store}>
        <TabPanel />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("[Desktop] Filters should show 6 correct input element", () => {
    const filterId: FilterIdType[] = [
      "Brightness",
      "Contrast",
      "Noise",
      "Saturation",
      "Vibrance",
      "Blur"
    ]

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

describe("[Mobile] Filter renders correctly", () => {
  beforeEach(() => {
    setupMatchMediaMock()

    render(
      <Provider store={store}>
        <TabFilters />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("[Mobile] Should show filter buttons then input", () => {
    const tabFilters = screen.getByTestId("tabFilters")
    // TO DO
    // Should have 6 buttons
    // click button
    // Should have filter input element
    // Should have back button
  })
})
