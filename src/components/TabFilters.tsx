import type { FilterControlType } from "@/types"
import { useState, useEffect } from "react"
import { filters } from "@/constants/filters"
import FilterControl from "./FilterControl"

export default function TabFilters() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.matchMedia('(max-width: 640px)').matches
      setIsMobile(isMobileView)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`${isMobile ? "flex flex-nowrap" : "w-full px-2"}`}>
      {filters.map((filter: FilterControlType, i: number) => {
        return (
          <FilterControl
            key={`filter-${i}`}
            id={filter.id}
            min={filter.min}
            max={filter.max}
            step={filter.step}
            newFilter={filter.newFilter}
            isMobile={isMobile}
          />
        )
      })}
    </div>
  )
}
