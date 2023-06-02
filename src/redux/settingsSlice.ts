import { defaultSettingsType, SelectedTabType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const defaultSettings: defaultSettingsType = {
  template: 0,
  ratio: 0,
  tab: "template"
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
  },
})

export const { changeTemplateByIndex, changeRatioByIndex, changeTab } =
  settingsSlice.actions

export default settingsSlice.reducer