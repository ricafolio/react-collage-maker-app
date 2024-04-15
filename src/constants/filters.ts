import type { FilterControlType } from "@/types"
import type { filters as fabricFilterType } from "fabric"
import { filters as fabricFilter } from "fabric"

export const filters: FilterControlType[] = [
  {
    id: "Noise",
    min: 0,
    max: 100,
    step: 1,
    newFilter: (value) =>
      new fabricFilter.Noise({
        noise: value,
      }) as fabricFilterType.BaseFilter,
  },
  {
    id: "Brightness",
    min: 0,
    max: 0.6,
    step: 0.002,
    newFilter: (value) =>
      new fabricFilter.Brightness({
        brightness: value,
      }) as fabricFilterType.BaseFilter,
  },
  {
    id: "Contrast",
    min: 0,
    max: 0.6,
    step: 0.002,
    newFilter: (value) =>
      new fabricFilter.Contrast({
        contrast: value,
      }) as fabricFilterType.BaseFilter,
  },
  {
    id: "Saturation",
    min: 0,
    max: 1,
    step: 0.002,
    newFilter: (value) =>
      new fabricFilter.Saturation({
        saturation: value,
      }) as fabricFilterType.BaseFilter,
  },
  {
    id: "Vibrance",
    min: 0,
    max: 0.6,
    step: 0.002,
    newFilter: (value) =>
      new fabricFilter.Vibrance({
        vibrance: value,
      }) as fabricFilterType.BaseFilter,
  },
  {
    id: "Blur",
    min: 0,
    max: 1,
    step: 0.002,
    newFilter: (value) =>
      new fabricFilter.Blur({
        blur: value,
      }) as fabricFilterType.BaseFilter,
  },
]
