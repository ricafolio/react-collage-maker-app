import { ASPECT_RATIOS } from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { changeRatioByIndex } from "@/redux/settingsSlice"
import { RootStateType } from "@/redux/store"
import toast, { Toaster } from "react-hot-toast"

export default function TabRatio() {
  const activeRatioIndex = useAppSelector(
    (state: RootStateType) => state.settings.ratio
  )
  const dispatch = useAppDispatch()

  return (
    <div className="grid grid-flow-col gap-x-2 text-white">
      <Toaster />
      {ASPECT_RATIOS.map((ratio, index) => {
        return (
          <button
            key={`ratio-${index}`}
            onClick={() => {
              dispatch(changeRatioByIndex(index)) 
              toast.success(`Ratio changed to ${ratio.name}`, { duration: 800 })
            }}
            className={`flex h-20 w-20 cursor-pointer flex-col items-center justify-center text-center transition-colors rounded ${
              index === activeRatioIndex
                ? "bg-neutral-800"
                : "hover:bg-neutral-800"
            }`}
            aria-label={`change aspect ratio to ${ratio.name}`}
          >
            <img src={ratio.icon} alt={ratio.name} />
            <span className="w-full text-center mt-1">{ratio.name}</span>
          </button>
        )
      })}
    </div>
  )
}
