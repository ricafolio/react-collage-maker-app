export const OBJECT_LOCKED = {
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

export const collage_templates = [
  {
    id: 1,
    uid: "two-landscape-photos",
    name: "Default",
    nickname: "Two landscape photos",
    config: [
      // config for each grid cell
      {
        rectFabric: (CANVAS_HEIGHT: number, CANVAS_WIDTH: number) => ({
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
        rectFabric: (CANVAS_HEIGHT: number, CANVAS_WIDTH: number) => ({
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

export const aspect_ratios = [
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
