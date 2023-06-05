import { SelectedImageStateType, UploadedImage, ImageFilterUpdate } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defaultState: SelectedImageStateType = {
  selectedImage: null,
  images: []
}

export const selectedImageSlice = createSlice({
  name: "selection",
  initialState: defaultState,
  reducers: {
    newImage: (state, action: PayloadAction<UploadedImage>) => {
      state.images = [
        ...state.images,
        action.payload
      ]
    },
    setSelectedImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = state.images.find((image) => image.id === action.payload) || null
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null
    },
    setImageFilterValue: (state, action: PayloadAction<ImageFilterUpdate>) => {
      const { imageId, filterType, filterValue } = action.payload
      const { selectedImage } = state

      if (selectedImage && selectedImage.id === imageId) {
        selectedImage.filters = {
          ...selectedImage.filters,
          [filterType]: filterValue,
        }
      }
    },
  },
})

export const {
  newImage,
  setSelectedImage,
  clearSelectedImage,
  setImageFilterValue
} = selectedImageSlice.actions

export default selectedImageSlice.reducer
