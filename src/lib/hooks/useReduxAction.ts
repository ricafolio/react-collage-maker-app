import { useAppDispatch } from "@/redux/hooks"
import { SelectedTabType, ImageFilterUpdate } from "@/types"
import { clearAllImages, setImageFilterValue } from "@/redux/selectedImageSlice"
import { changeTemplateByIndex, changeRatioByIndex, changeTab } from "@/redux/canvasSlice"

function useTabAction() {
  const dispatch = useAppDispatch()
  const changeTabAction = (tab: SelectedTabType) => {
    dispatch(changeTab(tab))
  }
  return { changeTabAction }
}

function useRatioAction() {
  const dispatch = useAppDispatch()
  const changeRatio = (index: number) => {
    dispatch(changeRatioByIndex(index))
    dispatch(clearAllImages())
  }
  return { changeRatio }
}

function useTemplateAction() {
  const dispatch = useAppDispatch()
  const changeTemplate = (index: number) => {
    dispatch(changeTemplateByIndex(index))
    dispatch(clearAllImages())
  }
  return { changeTemplate }
}

function useImageFilterAction() {
  const dispatch = useAppDispatch()
  const changeFilterValue = (values: ImageFilterUpdate) => {
    dispatch(setImageFilterValue(values))
  }
  return { changeFilterValue }
}

export {
  useTabAction,
  useRatioAction,
  useTemplateAction,
  useImageFilterAction
}
