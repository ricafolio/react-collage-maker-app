import calculateHeightByAspectRatio from "@/components/lib/aspectRatioHelper"
import { LockedObjectType, CollageTemplateType, AspectRatioType } from "@/types"

export const OBJECT_LOCKED: LockedObjectType = {
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingFlip: true,
  lockScalingX: true,
  lockScalingY: true,
  lockSkewingX: true,
  lockSkewingY: true,
  hasControls: false,
  selectable: false,
}

export const COLLAGE_TEMPLATES: CollageTemplateType[] = [
  {
    uid: "two-landscape-photos",
    name: "Two landscape photos",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH + 1,
          top: -1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH + 1,
          top: CANVAS_HEIGHT * 0.5,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
      },
    ],
  },
  {
    uid: "three-landscape-photos",
    name: "Three landscape photos",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * (1 / 3) + 1,
          width: CANVAS_WIDTH + 1,
          top: -1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * (1 / 3),
          width: CANVAS_WIDTH + 1,
          top: CANVAS_HEIGHT * (1 / 3),
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * (1 / 3),
          width: CANVAS_WIDTH + 1,
          top: CANVAS_HEIGHT * (1 / 3) * 2,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
      },
    ],
  },
]

const DEFAULT_HEIGHT = 576

export const ASPECT_RATIOS: AspectRatioType[] = [
  {
    name: "1:1",
    nickname: "Square",
    canvas: calculateHeightByAspectRatio(1, 1, DEFAULT_HEIGHT),
  },
  {
    name: "2:1",
    nickname: "FB Post",
    canvas: calculateHeightByAspectRatio(2, 1, DEFAULT_HEIGHT),
  },
  {
    name: "2:3",
    nickname: "Pinterest Pin",
    canvas: calculateHeightByAspectRatio(2, 3, DEFAULT_HEIGHT),
  },
  {
    name: "3:1",
    nickname: "Twitter Header",
    canvas: calculateHeightByAspectRatio(3, 1, DEFAULT_HEIGHT),
  },
  {
    name: "3:4",
    nickname: "Twitter Tall Photo",
    canvas: calculateHeightByAspectRatio(3, 4, DEFAULT_HEIGHT),
  },
  {
    name: "4:3",
    nickname: "Standard",
    canvas: calculateHeightByAspectRatio(4, 3, DEFAULT_HEIGHT),
  },
  {
    name: "9:16",
    nickname: "Stories",
    canvas: calculateHeightByAspectRatio(9, 16, DEFAULT_HEIGHT),
  },
  {
    name: "16:9",
    nickname: "Cinematic",
    canvas: calculateHeightByAspectRatio(16, 9, DEFAULT_HEIGHT),
  },
]
