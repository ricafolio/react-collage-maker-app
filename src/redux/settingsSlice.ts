import { defaultSettingsType, SelectedTabType } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Canvas } from "fabric"

const defaultSettings: defaultSettingsType = {
  canvas: null,
  ratio: 0,
  template: 0,
  tab: "template",
  uploaded: 0,
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
    increaseUploadCount: (state) => {
      state.uploaded = state.uploaded + 1
    },
    resetUploadCount: (state) => {
      state.uploaded = 0
    },
  },
})

export const {
  changeTemplateByIndex,
  changeRatioByIndex,
  changeTab,
  setCanvas,
  increaseUploadCount,
  resetUploadCount
} = settingsSlice.actions

export default settingsSlice.reducer
