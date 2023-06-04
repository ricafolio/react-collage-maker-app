import type { FilterControlType } from "@/types"
import { filters } from "@/constants/filters"
import FilterControl from "./FilterControl"

export default function TabFilters() {
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
