import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useCanvasConfigData } from "./lib/hooks/useReduxData"
import { useTemplateAction } from "./lib/hooks/useReduxAction"
import toast from "react-hot-toast"
import clsx from "clsx"

export default function TabTemplate() {
  const { activeTemplateIndex } = useCanvasConfigData()
  const { changeTemplate } = useTemplateAction()

  return (
    <>
      <div className="flex flex-nowrap sm:flex-wrap place-items-start text-white">
        {COLLAGE_TEMPLATES.map((template, index) => {
          return (
            <button
              key={`template-${index}`}
              aria-label={`change template to ${template.name}`}
              className={clsx(
                "cursor-pointer transition-colors rounded",
                "flex flex-col items-center justify-center text-center",
                "w-20 h-20 mx-1",
                "md:w-[calc(50%-8px)]",
                "sm:w-full sm:mb-2",
                {
                  "bg-neutral-800": index === activeTemplateIndex,
                  "hover:bg-neutral-800": index !== activeTemplateIndex,
                }
              )}
              onClick={() => {
                changeTemplate(index)
                toast.success(`Template changed`, { duration: 650, id: "toast-template" })
              }}
            >
              <img src={template.icon} alt={template.name} />
            </button>
          )
        })}
      </div>
    </>
  )
}
