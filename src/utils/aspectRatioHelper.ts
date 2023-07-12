import type { DimensionsType } from "@/types"

export default function calculateWidthByAspectRatio(
  widthRatio: number,
  heightRatio: number,
  exactWidth: number
): DimensionsType {
  return {
    width: exactWidth,
    height: Math.round((exactWidth / widthRatio) * heightRatio),
  }
}
