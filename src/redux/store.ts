import settingsReducer from "@/redux/settingsSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
})

// To easily set state type - `state: RootState`
export type RootStateType = ReturnType<typeof store.getState>

// To easily use dispath type via ./hooks
export type AppDispatch = typeof store.dispatch

export default store
