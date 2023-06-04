import type { FilterControlType } from "@/types"
import type { filters as fabricFilterType } from "fabric"
import { filters as fabricFilter } from "fabric"

export const filters: FilterControlType[] = [
  {
    id: "Noise",
    min: 0,
    max: 100,
    step: 1,
    emptyFilter: () => new fabricFilter.Noise({
      noise: 0
    }) as fabricFilterType.BaseFilter
  },
  {
    id: "Brightness",
    min: 0,
    max: 0.6,
    step: 0.002,
    emptyFilter: () => new fabricFilter.Brightness({
      brightness: 0.1
    }) as fabricFilterType.BaseFilter
  },
  {
    id: "Contrast",
    min: 0,
    max: 0.6,
    step: 0.002,
    emptyFilter: () => new fabricFilter.Contrast({
      contrast: 0.1
    }) as fabricFilterType.BaseFilter
  },
  {
    id: "Saturation",
    min: 0,
    max: 1,
    step: 0.002,
    emptyFilter: () => new fabricFilter.Saturation({
      saturation: 0.1
    }) as fabricFilterType.BaseFilter
  },
  {
    id: "Vibrance",
    min: 0,
    max: 0.6,
    step: 0.002,
    emptyFilter: () => new fabricFilter.Vibrance({
      vibrance: 0.1
    }) as fabricFilterType.BaseFilter
  },
  {
    id: "Blur",
    min: 0,
    max: 1,
    step: 0.002,
    emptyFilter: () => new fabricFilter.Blur({
      blur: 0.5
    }) as fabricFilterType.BaseFilter
  },
]
