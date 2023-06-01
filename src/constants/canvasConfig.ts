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
    name: "Two landscape photos",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_8)'%3E%3Crect x='0.5' y='15.5' width='29' height='14' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='29' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_8'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
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
        scaleTo: "width",
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
        scaleTo: "width",
      },
    ],
  },
  {
    name: "Three landscape photos",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_2)'%3E%3Crect x='0.5' y='9.5' width='29' height='11' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='29' height='9' stroke='white'/%3E%3Crect x='0.5' y='20.5' width='29' height='9' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
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
        scaleTo: "width",
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
        scaleTo: "width",
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
        scaleTo: "width",
      },
    ],
  },
  {
    name: "Two portrait photos",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_12)'%3E%3Crect x='0.5' y='29.5' width='29' height='14' transform='rotate(-90 0.5 29.5)' stroke='white'/%3E%3Crect x='14.5' y='29.5' width='29' height='15' transform='rotate(-90 14.5 29.5)' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_12'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT,
          width: CANVAS_WIDTH * 0.5 + 1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT,
          width: CANVAS_WIDTH * 0.5 + 1,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "1 landscape, 2 squares bottom",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_18)'%3E%3Crect x='15.5' y='14.5' width='14' height='15' stroke='white'/%3E%3Crect x='0.5' y='14.5' width='15' height='15' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='29' height='14' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_18'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
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
        scaleTo: "width",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.5,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.5,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "4 squares",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_18)'%3E%3Crect x='15.5' y='15.5' width='14' height='14' stroke='white'/%3E%3Crect x='0.5' y='15.5' width='15' height='14' stroke='white'/%3E%3Crect x='15.5' y='0.5' width='14' height='15' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='15' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_18'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.5,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4a4a4a",
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.5,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "4 squares uneven",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_24)'%3E%3Crect x='15.5' y='11.5' width='14' height='18' stroke='white'/%3E%3Crect x='0.5' y='18.5' width='15' height='11' stroke='white'/%3E%3Crect x='15.5' y='0.5' width='14' height='11' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='15' height='18' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_24'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.6 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.4,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.6,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * 0.4,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4a4a4a",
          height: CANVAS_HEIGHT * 0.6 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.4,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "3 squares - 2 left, 1 right",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_29)'%3E%3Crect x='0.5' y='15.5' width='15' height='14' stroke='white'/%3E%3Crect x='15.5' y='0.5' width='14' height='29' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='15' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_29'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.5,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "3 squares - 2 right, 1 left",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_34)'%3E%3Crect x='14.5' y='15.5' width='15' height='14' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='14' height='29' stroke='white'/%3E%3Crect x='14.5' y='0.5' width='15' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_34'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.5,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
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
