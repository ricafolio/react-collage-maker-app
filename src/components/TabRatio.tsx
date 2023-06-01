import { ASPECT_RATIOS } from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { changeRatioByIndex } from "@/redux/settingsSlice"
import { RootStateType } from "@/redux/store"

export default function TabRatio() {
  const activeRatioIndex = useAppSelector(
    (state: RootStateType) => state.settings.ratio
  )
  const dispatch = useAppDispatch()

  return (
    <div className="grid grid-flow-col gap-x-2 text-white">
      {ASPECT_RATIOS.map((ratio, index) => {
        return (
          <div
            key={`ratio-${index}`}
            onClick={() => dispatch(changeRatioByIndex(index))}
            className={`flex h-20 w-20 cursor-pointer flex-col items-center justify-center border transition-colors ${
              index === activeRatioIndex
                ? "border-white"
                : "border-neutral-800 hover:border-neutral-200"
            }`}
          >
            <span>{ratio.name}</span>
            <small className="text-xs">{ratio.nickname}</small>
          </div>
        )
      })}
    </div>
  )
}
