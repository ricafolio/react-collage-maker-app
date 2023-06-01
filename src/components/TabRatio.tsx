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
              toast.success(`Ratio changed to ${ratio.name}`)
            }}
            className={`flex h-20 w-20 px-2 cursor-pointer flex-col items-center justify-center border transition-colors ${
              index === activeRatioIndex
                ? "border-white"
                : "border-neutral-800 hover:border-neutral-200"
            }`}
          >
            <span className="w-full text-center">{ratio.name}</span>
            <small className="w-full text-center text-xs">{ratio.nickname}</small>
          </button>
        )
      })}
    </div>
  )
}
