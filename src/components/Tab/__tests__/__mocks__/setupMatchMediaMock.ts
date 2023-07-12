import { vi } from "vitest"

export const setupMatchMediaMock = () => {
  Object.defineProperty(window, "matchMedia", {
    value: vi.fn(() => {
      return {
        matches: true,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      }
    })
  })
}
