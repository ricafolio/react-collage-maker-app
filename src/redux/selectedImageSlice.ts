import {
  SelectedImageStateType,
  UploadedImage,
  ImageFilterUpdate,
} from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defaultState: SelectedImageStateType = {
  selectedImageIndex: null,
  images: [],
}

export const selectedImageSlice = createSlice({
  name: "selection",
  initialState: defaultState,
  reducers: {
    newImage: (state, action: PayloadAction<UploadedImage>) => {
      state.images = [...state.images, action.payload]
    },
    setSelectedImage: (state, action: PayloadAction<string>) => {
      const selectedIndex = state.images.findIndex(
        (image) => image.id === action.payload,
      )
      state.selectedImageIndex = selectedIndex !== -1 ? selectedIndex : null
    },
    clearSelectedImage: (state) => {
      state.selectedImageIndex = null
    },
    clearAllImages: (state) => {
      state.selectedImageIndex = null
      state.images = []
    },
    setImageFilterValue: (state, action: PayloadAction<ImageFilterUpdate>) => {
      // protect imageIndex  againts nulls before running the reducer
      const { imageIndex, filterType, filterValue } = action.payload

      const updatedImage = { ...state.images[imageIndex] }
      updatedImage.filters = {
        ...updatedImage.filters,
        [filterType]: filterValue,
      }

      state.images[imageIndex] = updatedImage
    },
  },
})

export const {
  newImage,
  setSelectedImage,
  clearSelectedImage,
  clearAllImages,
  setImageFilterValue,
} = selectedImageSlice.actions

export default selectedImageSlice.reducer
