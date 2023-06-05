import { CanvasStateType, SelectedTabType } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Canvas } from "fabric"

const defaultState: CanvasStateType = {
  canvas: null,
  ratio: 0,
  template: 0,
  tab: "template",
}

export const canvasSlice = createSlice({
  name: "canvas",
  initialState: defaultState,
  reducers: {
    changeTemplateByIndex: (state, action: PayloadAction<number>) => {
      state.template = action.payload
    },
    changeRatioByIndex: (state, action: PayloadAction<number>) => {
      state.ratio = action.payload
    },
    changeTab: (state, action: PayloadAction<SelectedTabType>) => {
      state.tab = action.payload
    },
    setCanvas: (state, action: PayloadAction<Canvas>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.canvas = action.payload
    },
  },
})

export const {
  changeTemplateByIndex,
  changeRatioByIndex,
  changeTab,
  setCanvas,
} = canvasSlice.actions

export default canvasSlice.reducer
