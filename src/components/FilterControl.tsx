import type { RootStateType } from "@/redux/store"
import type { FilterControlType, FilterListType } from "@/types"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import toast from "react-hot-toast"
import * as fabric from "fabric"

export default function FilterControl(props: FilterControlType) {
  const { id, min, max, step, emptyFilter } = props
  const [value, setValue] = useState<number>(0)
  const canvas = useAppSelector(
    (state: RootStateType) => state.settings.canvas
  )
  const computePercentage = () => {
    const percentage = ((value - min) / (max - min)) * 100
    return Math.round(percentage)
  }

  function addFilter() {
    if (canvas) {
      const image = canvas.getActiveObject() as fabric.Image
      
      if (!image) {
        toast("Please select an image to apply filter", { id: "no-image" })
        setValue(0)
        return
      }

      const parsedImage = image.toJSON()
      const filterIndex = parsedImage.filters.findIndex((f: { type: string }) => f.type === id)

      if (filterIndex !== -1) {
        // Change existing filter
        const filterInstance = image.filters[filterIndex] as FilterListType
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (filterInstance as { [key: string]: any })[id.toLowerCase()] = value
      } else {
        // Create new filter
        image.filters.push(emptyFilter())
      }

      image.applyFilters()
      canvas.renderAll()
    }
  }

  return (
    <div className="border-b border-neutral-800 py-4">
      <div className={`flex flex-row w-full items-center transition-colors rounded`}>
        <h3 className="w-1/2 text-left font-medium">{id}</h3>
        <span className="w-1/2 text-right">{computePercentage()}%</span>
      </div>

      <div className="w-full flex justify-center items-center">
        {(
          <input
            id={id}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              setValue(parseFloat(e.target.value))
              addFilter()
            }}
            className="w-full my-2"
          />
        )}
      </div>
    </div>
  )
}
