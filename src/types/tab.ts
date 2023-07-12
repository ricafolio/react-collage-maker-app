import type { ReactElement } from "react"

export type SelectedTabType = "template" | "ratio" | "more"

export interface TabItem {
  id: SelectedTabType
  icon: ReactElement
}
