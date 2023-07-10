import { SelectedTabType } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { changeTab } from "@/redux/canvasSlice"

function useTabAction() {
  const dispatch = useAppDispatch()
  const changeTabAction = (tab: SelectedTabType) => {
    dispatch(changeTab(tab))
  }
  return { changeTabAction }
}

export {
  useTabAction
}
