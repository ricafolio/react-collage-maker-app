import type { FilterControlType } from "@/types"
import FilterControl from "./FilterControl"
import * as fabric from "fabric"

export default function TabFilters() {
  const filters: FilterControlType[] = [
    {
      id: "Noise",
      min: 0,
      max: 100,
      step: 1,
      emptyFilter: () => new fabric.filters.Noise({
        noise: 0
      }) as fabric.filters.BaseFilter
    },
    {
      id: "Brightness",
      min: 0,
      max: 0.6,
      step: 0.002,
      emptyFilter: () => new fabric.filters.Brightness({
        brightness: 0.1
      }) as fabric.filters.BaseFilter
    },
  ]

  return (
    <div className="w-full px-2">
      {filters.map((filter: FilterControlType, i: number) => {
        return (
          <FilterControl
            key={`filter-${i}`}
            id={filter.id}
            min={filter.min}
            max={filter.max}
            step={filter.step}
            emptyFilter={filter.emptyFilter}
          />
        )
      })}
    </div>
  )
}
