import clsx from "clsx"
import * as fabric from "fabric"
import type { RootStateType } from "@/redux/store"
import type { FilterControlTypeProps, FilterListType, LowercaseFilterIdType } from "@/types"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { setImageFilterValue } from "@/redux/selectedImageSlice"
import toast from "react-hot-toast"

export default function FilterControl(props: FilterControlTypeProps) {
  const { id, min, max, step, newFilter, isMobile, activeFilter, setActiveFilter } = props
  const filterTypeLower = id.toLowerCase()

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
      <>
        {activeFilter === null
          // LIST OF FILTERS
          ? (
            <button 
              onClick={() => setActiveFilter(id)} 
              className={clsx(
                "cursor-pointer transition-colors",
                "min-w-20 h-20 mx-1 px-2",
                "flex flex-col items-center justify-center text-center",
                "rounded hover:bg-neutral-800",
            )}>
              <span className="w-full text-center">
                {selectedImageIndex !== null ? `${computePercentage()}` : "-"}
              </span>
              <h3 className="w-full text-center text-sm font-medium">{id}</h3>
            </button>
          )
          : (
            // SHOW ACTIVE FILTER INNER CONTENT
            activeFilter === id && (
              <div className="w-full flex items-center">
                <button 
                  onClick={() => setActiveFilter(null)} 
                  className={clsx(
                    "cursor-pointer",
                    "mx-1 px-1 h-20 w-16",
                    "flex flex-col items-center justify-center",
                    "rounded hover:bg-neutral-800",
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023Z" clipRule="evenodd"/></svg>
                  <span className="text-sm">Back</span>
                </button>

                <div className="grow mx-3">
                  <div className="flex flex-row w-full items-center transition-colors rounded">
                    <h3 className="w-1/2 text-left font-medium">{id}</h3>
                    <span className="w-1/2 text-right">
                      {selectedImageIndex !== null ? `${computePercentage()}%` : "-"}
                    </span>
                  </div>

                  <div className="w-full flex justify-center items-center">
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
                  </div>
                </div>
              </div>
            )
          )
        }
      </>
    )
  }

  return (
    <div data-testid={filterTypeLower} className="border-b border-neutral-800 py-4">
      <div className="flex flex-row w-full items-center transition-colors rounded">
        <h3 className="w-1/2 text-left font-medium">{id}</h3>
        <span className="w-1/2 text-right">
          {selectedImageIndex !== null ? `${computePercentage()}%` : "-"}
        </span>
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
