import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { changeTemplateByIndex } from "@/redux/canvasSlice"
import { RootStateType } from "@/redux/store"
import toast from "react-hot-toast"

export default function TabTemplate() {
  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.canvas.template
  )
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex flex-nowrap sm:flex-wrap place-items-start text-white">
        {COLLAGE_TEMPLATES.map((template, index) => {
          return (
            <button
              key={`template-${index}`}
              aria-label={`change template to ${template.name}`}
              className={`flex mx-1 sm:mb-2 h-20 w-20 sm:w-full md:w-[calc(50%-8px)] cursor-pointer flex-col items-center justify-center text-center transition-colors rounded ${
                index === activeTemplateIndex
                  ? "bg-neutral-800"
                  : "hover:bg-neutral-800"
              }`}
              onClick={() => {
                dispatch(changeTemplateByIndex(index))
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
