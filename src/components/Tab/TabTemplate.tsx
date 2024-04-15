import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useTemplateAction } from "@/hooks/useReduxAction"
import { useCanvasConfigData } from "@/hooks/useReduxData"
import clsx from "clsx"
import toast from "react-hot-toast"

export default function TabTemplate() {
  const { activeTemplateIndex } = useCanvasConfigData()
  const { changeTemplate } = useTemplateAction()

  return (
    <>
      <div className="flex flex-nowrap place-items-start text-white sm:flex-wrap">
        {COLLAGE_TEMPLATES.map((template, index) => {
          return (
            <button
              key={`template-${index}`}
              aria-label={`change template to ${template.name}`}
              className={clsx(
                "cursor-pointer rounded transition-colors",
                "flex flex-col items-center justify-center text-center",
                "mx-1 h-20 w-20",
                "md:w-[calc(50%-8px)]",
                "sm:mb-2 sm:w-full",
                {
                  "bg-neutral-800": index === activeTemplateIndex,
                  "hover:bg-neutral-800": index !== activeTemplateIndex,
                },
              )}
              onClick={() => {
                changeTemplate(index)
                toast.success(`Template changed`, {
                  duration: 650,
                  id: "toast-template",
                })
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
