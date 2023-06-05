import type { Image } from "fabric"

export type CustomImageObject = Image & {
  id: string
}

export interface UploadedImage {
  id: string
  filters: {
    brightness: number
    contrast: number
    noise: number
    saturation: number
    vibrance: number
    blur: number
  }
}

export interface SelectedImageStateType {
  selectedImage: UploadedImage | null
  images: UploadedImage[]
}

export interface ImageFilterUpdate {
  imageId: string
  filterType: string
  filterValue: number
}
