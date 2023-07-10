import { SelectedTabType } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { changeTemplateByIndex, changeRatioByIndex, changeTab } from "@/redux/canvasSlice"
import { clearAllImages } from "@/redux/selectedImageSlice"

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

export {
  useTabAction,
  useRatioAction,
  useTemplateAction
}
