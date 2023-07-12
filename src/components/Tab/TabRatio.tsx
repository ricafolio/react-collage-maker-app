import { ASPECT_RATIOS } from "@/constants/canvasConfig"
import { useCanvasConfigData } from "@/hooks/useReduxData"
import { useRatioAction } from "@/hooks/useReduxAction"

import toast from "react-hot-toast"
import clsx from "clsx"

export default function TabRatio() {
  const { activeRatioIndex } = useCanvasConfigData()
  const { changeRatio } = useRatioAction()

  return (
    <>
      <div className="flex flex-nowrap sm:flex-wrap place-items-start text-white">
        {ASPECT_RATIOS.map((ratio, index) => {
          return (
            <button
              key={`ratio-${index}`}
              aria-label={`change aspect ratio to ${ratio.name}`}
              className={clsx(
                "cursor-pointer transition-colors rounded",
                "flex flex-col items-center justify-center text-center",
                "w-20 h-20 mx-1",
                "md:w-[calc(50%-8px)]",
                "sm:w-full sm:mb-2",
                {
                  "bg-neutral-800": index === activeRatioIndex,
                  "hover:bg-neutral-800": index !== activeRatioIndex,
                }
              )}
              onClick={() => {
                changeRatio(index)
                toast.success(`Ratio changed to ${ratio.name}`, { duration: 650, id: "toast-ratio" })
              }}
            >
              <img src={ratio.icon} alt={ratio.name} />
              <span className="w-full text-center mt-1">{ratio.name}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
