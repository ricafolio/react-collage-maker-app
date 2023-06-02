import type { RootStateType } from "@/redux/store"
import type { FilterType } from "@/types"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import * as fabric from "fabric"
import toast, { Toaster } from "react-hot-toast"

export default function TabMore() {
  const [setting, setSetting] = useState<FilterType>("Noise")
  const [value, setValue] = useState<number>(0)

  const canvas = useAppSelector(
    (state: RootStateType) => state.settings.canvas
  )

  function addFilter() {
    // to do: add filter by id
    if (canvas) {
      const image = canvas.getActiveObject() as fabric.Image
      if (image) {
        const parsedImage = image.toJSON()
        const filterIndex = parsedImage.filters.findIndex((f: { type: string, noise: number}) => f.type === 'Noise')

        if (filterIndex !== -1) {
          // Change existing filter
          (image.filters[filterIndex] as fabric.filters.Noise).noise = value
        } else {
          // Create new filter
          const noiseFilter = new fabric.filters.Noise({
            noise: 0
          }) as fabric.filters.BaseFilter
          image.filters.push(noiseFilter)
        }

        image.applyFilters()
        canvas.renderAll()
      } else {
        toast("Please select an image to apply filter", { id: "no-image" })
        setValue(0)
      }
    }
  }

  return (
    <div className="w-full px-2">
      <Toaster />
      <button 
        type="button" 
        onClick={() => setSetting("Noise")}
        className={`flex h-16 w-16 cursor-pointer flex-col items-center justify-center text-center transition-colors rounded ${
              setting === "Noise"
                ? "bg-neutral-800"
                : "hover:bg-neutral-800"
            }`}
      >
        <h3>{value}</h3>
        <small className="text-xs">Noise</small>
      </button>
      <div className="w-full flex justify-center items-center">
        {setting === "Noise" && (
          <input 
            type="range" 
            min={0} 
            max={100} 
            step={1} 
            value={value} 
            onChange={(e) => {
              setValue(parseInt(e.target.value))
              addFilter()
            }}
            className="w-full my-2 mx-4"
          />
        )}
      </div>
    </div>
  )
}
