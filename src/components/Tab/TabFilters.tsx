import type { FilterControlType, FilterIdType } from "@/types"
import { filters } from "@/constants/filters"
import { useState, useEffect } from "react"

import FilterSliderInput from "@/components/Filter/FilterSliderInput"
import clsx from "clsx"

export default function TabFilters() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeFilter, setActiveFilter] = useState<FilterIdType | null>(null)

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
    <div 
      data-testid="tabFilters"
      className={clsx({
        "w-full": true,
        "flex flex-nowrap": isMobile,
        "px-2": !isMobile
      })}
    >
      {filters.map((filter: FilterControlType, i: number) => {
        return (
          <FilterSliderInput
            key={`filter-${i}`}
            id={filter.id}
            min={filter.min}
            max={filter.max}
            step={filter.step}
            newFilter={filter.newFilter}
            isMobile={isMobile}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        )
      })}
    </div>
  )
}
