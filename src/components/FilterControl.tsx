import * as fabric from "fabric"
import type { RootStateType } from "@/redux/store"
import type { FilterControlType, FilterListType, LowercaseFilterIdType } from "@/types"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { setImageFilterValue } from "@/redux/selectedImageSlice"
import toast from "react-hot-toast"
import { useState, useEffect } from "react"

export default function FilterControl(props: FilterControlType) {
  const { id, min, max, step, newFilter } = props
  const filterTypeLower = id.toLowerCase()

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

  // Get necessary data from Redux store
  const dispatch = useAppDispatch()
  const canvas = useAppSelector((state: RootStateType) => state.canvas.canvas)
  const images = useAppSelector((state: RootStateType) => state.selection.images)
  const selectedImageIndex = useAppSelector((state: RootStateType) => state.selection.selectedImageIndex)

  // get image filter historical values or set all to zero if none is selected
  const selectedImage = (
    selectedImageIndex !== null 
      ? images[selectedImageIndex] 
      : {
          filters: {
            brightness: 0,
            contrast: 0,
            noise: 0,
            saturation: 0,
            vibrance: 0,
            blur: 0,
          }
        }
  )

  // actual range value
  const rangeValue = selectedImage.filters[filterTypeLower as LowercaseFilterIdType]
  
  // Compute the percentage based on the range value
  const computePercentage = () => Math.round(((rangeValue - min) / (max - min)) * 100)

  // Add or update the image filter when the range value changes
  const addFilter = async (filterValue: number) => {
    if (!canvas) return

    const image = canvas.getActiveObject() as fabric.Image
    const parsedImage: fabric.Image = await image.toJSON()
    const filterIndex = parsedImage.filters.findIndex((f: { type: string }) => filterTypeLower in f)

    if (filterIndex !== -1) {
      // Tweak existing filter
      const filterInstance = image.filters[filterIndex] as FilterListType

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (filterInstance as { [key: string]: any })[filterTypeLower] = filterValue
    } else {
      // Create new filter
      image.filters.push(newFilter(filterValue))
    }

    image.applyFilters(image.filters)
    canvas.renderAll()
  }

  // Update the filter value when the range value changes
  const setValue = async (value: string) => {
    if (selectedImageIndex === null) {
      toast("Please select an image to apply filter", { id: "no-image" })
      return
    }

    // Start adding the actual filter
    await addFilter(parseFloat(value))

    // Set selectedImage value in redux, it will take care of the rest
    dispatch(setImageFilterValue({
      imageIndex: selectedImageIndex,
      filterType: filterTypeLower,
      filterValue: parseFloat(value)
    }))
  }

  if (isMobile) { 
    return (
      <div>
        {/* { TO DO } */}
      </div>
    )
  }

  return (
    <div data-testid={filterTypeLower} className="border-b border-neutral-800 py-4">
      <div className={`flex flex-row w-full items-center transition-colors rounded`}>
        <h3 className="w-1/2 text-left font-medium">{id}</h3>
        <span className="w-1/2 text-right">{selectedImageIndex !== null ? `${computePercentage()}%` : "-"}</span>
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
