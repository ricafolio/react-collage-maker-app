import * as fabric from "fabric"
import type { RootStateType } from "@/redux/store"
import type { FilterControlType, FilterListType, LowercaseFilterIdType } from "@/types"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { setImageFilterValue } from "@/redux/settingsSlice"
import toast from "react-hot-toast"

export default function FilterControl(props: FilterControlType) {
  const { id, min, max, step, emptyFilter } = props

  // Get necessary data from Redux store
  const dispatch = useAppDispatch()
  const canvas = useAppSelector((state: RootStateType) => state.settings.canvas)
  const selectedImage = useAppSelector((state: RootStateType) => state.settings.selectedImage)
  const filterTypeLower = id.toLowerCase()
  const rangeValue = selectedImage?.filters[filterTypeLower as LowercaseFilterIdType] || 0

  // Compute the percentage based on the range value
  const computePercentage = () => Math.round(((rangeValue - min) / (max - min)) * 100)

  // Add or update the image filter when the range value changes
  const addFilter = () => {
    if (!canvas) return

    const image = canvas.getActiveObject() as fabric.Image
    const parsedImage: fabric.Image = image.toJSON()
    const filterIndex = parsedImage.filters.findIndex((f: { type: string }) => f.type === id)

    if (filterIndex !== -1) {
      // Tweak existing filter
      const filterInstance = image.filters[filterIndex] as FilterListType

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (filterInstance as { [key: string]: any })[filterTypeLower] = rangeValue
    } else {
      // Create new filter
      image.filters.push(emptyFilter())
    }

    image.applyFilters()
    canvas.renderAll()
  }

  // Update the filter value when the range value changes
  const setValue = (value: string) => {
    if (!selectedImage) {
      toast("Please select an image to apply filter", { id: "no-image" })
      return
    }

    // Set selectedImage value in redux, it will take care of the rest
    dispatch(setImageFilterValue({
      imageId: selectedImage.id,
      filterType: filterTypeLower,
      filterValue: parseFloat(value)
    }))

    // Start adding the actual filter
    addFilter()
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
            value={rangeValue}
            onChange={(e) => setValue(e.target.value)}
            className="w-full my-2"
          />
        )}
      </div>
    </div>
  )
}
