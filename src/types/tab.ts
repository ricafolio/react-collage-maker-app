import type { ReactElement } from "react"

export type SelectedTabType = "template" | "ratio" | "filters"

export interface TabItem {
  id: SelectedTabType
  icon: ReactElement
}
