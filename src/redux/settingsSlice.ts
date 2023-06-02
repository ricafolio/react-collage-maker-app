import { defaultSettingsType, SelectedTabType } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Canvas } from "fabric"

const defaultSettings: defaultSettingsType = {
  template: 0,
  ratio: 0,
  tab: "template",
  canvas: null,
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState: defaultSettings,
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
  }
})

export const {
  changeTemplateByIndex,
  changeRatioByIndex,
  changeTab,
  setCanvas,
} = settingsSlice.actions

export default settingsSlice.reducer