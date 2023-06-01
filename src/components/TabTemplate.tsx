import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { changeTemplateByIndex } from "@/redux/settingsSlice"
import { RootStateType } from "@/redux/store"
import toast, { Toaster } from "react-hot-toast"

export default function TabTemplate() {
  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.settings.template
  )
  const dispatch = useAppDispatch()

  return (
    <div className="grid grid-flow-col gap-x-2 text-white">
      <Toaster toastOptions={{ className: "text-center" }}/>
      {COLLAGE_TEMPLATES.map((template, index) => {
        return (
          <button
            key={`template-${index}`}
            onClick={() => {
              dispatch(changeTemplateByIndex(index))
              toast.success(`Template changed`)
            }}
            className={`flex h-20 w-20 cursor-pointer flex-col items-center justify-center text-center transition-colors rounded ${
              index === activeTemplateIndex
                ? "bg-neutral-800"
                : "hover:bg-neutral-800"
            }`}
            aria-label={`change template to ${template.name}`}
          >
            <img src={template.icon} alt={template.name} />
          </button>
        )
      })}
    </div>
  )
}
