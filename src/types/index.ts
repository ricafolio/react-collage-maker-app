import type { filters, Canvas, Image } from "fabric"
export type SelectedTabType = "template" | "ratio" | "more"

export type LockedObjectType = {
  lockMovementX: boolean
  lockMovementY: boolean
  lockRotation: boolean
  lockScalingFlip: boolean
  lockScalingX: boolean
  lockScalingY: boolean
  lockSkewingX: boolean
  lockSkewingY: boolean
  hasControls: boolean
  selectable: boolean
}

export type RectFabricFunctionType = (
  CANVAS_HEIGHT: number,
  CANVAS_WIDTH: number
) => {
  fill: string
  height: number
  width: number
  absolutePositioned: boolean
  hoverCursor: string
  top?: number
  left?: number
}

export type RectConfigType = {
  rectFabric: RectFabricFunctionType
  scaleTo: "width" | "height"
}

export type CollageTemplateType = {
  name: string
  icon: string
  config: RectConfigType[]
}

export type DimensionsType = {
  width: number
  height: number
}

export type AspectRatioType = {
  name: string
  nickname: string
  icon: string
  canvas: (w: number) => DimensionsType
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

export interface defaultSettingsType {
  canvas: Canvas | null
  ratio: number
  template: number
  tab: SelectedTabType
  uploaded: number
  selectedImage: UploadedImage | null
  images: UploadedImage[]
}

export type FilterIdType =
  | "Brightness"
  | "Contrast"
  | "Noise"
  | "Saturation"
  | "Vibrance"
  | "Blur"

export type LowercaseFilterIdType = Lowercase<FilterIdType>

export type FilterListType = 
   | filters.Brightness
   | filters.Contrast
   | filters.Noise
   | filters.Saturation
   | filters.Vibrance
   | filters.Pixelate
   | filters.Blur

export type FilterControlType = {
  id: FilterIdType
  min: number
  max: number
  step: number
  emptyFilter: () => filters.BaseFilter
}

export type CustomImageObject = Image & {
  id: string
}
