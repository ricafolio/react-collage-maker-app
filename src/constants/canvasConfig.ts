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
    id: 1,
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
]

export const ASPECT_RATIOS: AspectRatioType[] = [
  {
    id: 1,
    name: "1:1",
    nickname: "Square",
    canvas: {
      width: 576,
      height: 576,
    },
  },
  {
    id: 2,
    name: "3:2",
    nickname: "",
    canvas: {
      width: 1080,
      height: 720,
    },
  },
  {
    id: 3,
    name: "4:3",
    nickname: "",
    canvas: {
      width: 1024,
      height: 768,
    },
  },
  {
    id: 4,
    name: "16:9",
    nickname: "Cinematic",
    canvas: {
      width: 1200,
      height: 628,
    },
  },
  {
    id: 5,
    name: "9:16",
    nickname: "Tiktok",
    canvas: {
      width: 628,
      height: 1200,
    },
  },
]
