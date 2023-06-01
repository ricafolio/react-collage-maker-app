import { defaultSettingsType } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defaultSettings: defaultSettingsType = {
  template: 0,
  ratio: 0,
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
  },
})

export const { changeTemplateByIndex, changeRatioByIndex } = settingsSlice.actions

export default settingsSlice.reducer
