import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { changeTemplateByIndex } from "@/redux/settingsSlice"
import { RootStateType } from "@/redux/store"

export default function TabTemplate() {
  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.settings.template
  )
  const dispatch = useAppDispatch()

  return (
    <div className="grid grid-flow-col gap-x-2 text-white">
      {COLLAGE_TEMPLATES.map((template, index) => {
        return (
          <div
            key={`template-${index}`}
            onClick={() => dispatch(changeTemplateByIndex(index))}
            className={`flex h-20 w-20 cursor-pointer flex-col items-center justify-center border text-center transition-colors ${
              index === activeTemplateIndex
                ? "border-white"
                : "border-neutral-800 hover:border-neutral-200"
            }`}
          >
            <small>{template.name}</small>
          </div>
        )
      })}
    </div>
  )
}
