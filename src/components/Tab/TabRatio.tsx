import { ASPECT_RATIOS } from "@/constants/canvasConfig"
import { useRatioAction } from "@/hooks/useReduxAction"
import { useCanvasConfigData } from "@/hooks/useReduxData"
import clsx from "clsx"
import toast from "react-hot-toast"

export default function TabRatio() {
  const { activeRatioIndex } = useCanvasConfigData()
  const { changeRatio } = useRatioAction()

  return (
    <>
      <div className="flex flex-nowrap place-items-start text-white sm:flex-wrap">
        {ASPECT_RATIOS.map((ratio, index) => {
          return (
            <button
              key={`ratio-${index}`}
              aria-label={`change aspect ratio to ${ratio.name}`}
              className={clsx(
                "cursor-pointer rounded transition-colors",
                "flex flex-col items-center justify-center text-center",
                "mx-1 h-20 w-20",
                "md:w-[calc(50%-8px)]",
                "sm:mb-2 sm:w-full",
                {
                  "bg-neutral-800": index === activeRatioIndex,
                  "hover:bg-neutral-800": index !== activeRatioIndex,
                },
              )}
              onClick={() => {
                changeRatio(index)
                toast.success(`Ratio changed to ${ratio.name}`, {
                  duration: 650,
                  id: "toast-ratio",
                })
              }}
            >
              <img src={ratio.icon} alt={ratio.name} />
              <span className="mt-1 w-full text-center">{ratio.name}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
