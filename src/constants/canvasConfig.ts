import { LockedObjectType, CollageTemplateType, AspectRatioType } from "@/types"
import calculateAspectRatio from "@/utils/aspectRatioHelper"

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
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH + 1,
          top: CANVAS_HEIGHT * 0.5 - 1,
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
          height: CANVAS_HEIGHT * (1 / 3) + 1,
          width: CANVAS_WIDTH + 1,
          top: CANVAS_HEIGHT * (1 / 3) - 1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "width",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * (1 / 3) + 1,
          width: CANVAS_WIDTH + 1,
          top: CANVAS_HEIGHT * (1 / 3) * 2 - 1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "width",
      },
    ],
  },
  {
    name: "Three portrait photos",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_30)'%3E%3Crect x='9.5' y='29.5' width='29' height='11' transform='rotate(-90 9.5 29.5)' stroke='white'/%3E%3Crect x='0.5' y='29.5' width='29' height='9' transform='rotate(-90 0.5 29.5)' stroke='white'/%3E%3Crect x='20.5' y='29.5' width='29' height='9' transform='rotate(-90 20.5 29.5)' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_30'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          left: -1,
          top: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          left: CANVAS_WIDTH * (1 / 3) - 1,
          top: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          left: CANVAS_WIDTH * (1 / 3) * 2 - 1,
          top: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
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
          height: CANVAS_HEIGHT + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          left: -1,
          top: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          left: CANVAS_WIDTH * 0.5 - 1,
          top: -1,
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
          left: CANVAS_WIDTH * 0.5 - 1,
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
          top: CANVAS_HEIGHT * 0.5 - 1,
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
          top: CANVAS_HEIGHT * 0.5 - 1,
          left: CANVAS_WIDTH * 0.5 - 1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "6 portrait",
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_8_2)'%3E%3Crect x='20.5' y='0.5' width='9' height='15' stroke='white'/%3E%3Crect x='20.5' y='15.5' width='9' height='14' stroke='white'/%3E%3Crect x='10.5' y='0.5' width='10' height='15' stroke='white'/%3E%3Crect x='10.5' y='15.5' width='10' height='14' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='10' height='15' stroke='white'/%3E%3Crect x='0.5' y='15.5' width='10' height='14' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_8_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * (1 / 2) + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
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
          height: CANVAS_HEIGHT * (1 / 2) + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          top: -1,
          left: CANVAS_WIDTH * (1 / 3) - 1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * (1 / 2) + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          top: -1,
          left: CANVAS_WIDTH * (2 / 3) - 1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },

      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1f1f1f",
          height: CANVAS_HEIGHT * (1 / 2) + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          top: CANVAS_HEIGHT * (1 / 2) - 1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2f2f2f",
          height: CANVAS_HEIGHT * (1 / 2) + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          top: CANVAS_HEIGHT * (1 / 2) - 1,
          left: CANVAS_WIDTH * (1 / 3) - 1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3f3f3f",
          height: CANVAS_HEIGHT * (1 / 2) + 1,
          width: CANVAS_WIDTH * (1 / 3) + 1,
          top: CANVAS_HEIGHT * (1 / 2) - 1,
          left: CANVAS_WIDTH * (2 / 3) - 1,
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
          height: CANVAS_HEIGHT * 0.4 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.6 - 1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * 0.4 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: CANVAS_WIDTH * 0.5 - 1,
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
          top: CANVAS_HEIGHT * 0.4 - 1,
          left: CANVAS_WIDTH * 0.5 - 1,
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
          top: CANVAS_HEIGHT * 0.5 - 1,
          left: -1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: CANVAS_WIDTH * 0.5 - 1,
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
          height: CANVAS_HEIGHT + 1,
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
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: -1,
          left: CANVAS_WIDTH * 0.5 - 1,
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
          top: CANVAS_HEIGHT * 0.5 - 1,
          left: CANVAS_WIDTH * 0.5 - 1,
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
          height: CANVAS_HEIGHT * 0.5 + 1,
          width: CANVAS_WIDTH * 0.5 + 1,
          top: CANVAS_HEIGHT * 0.5 - 1,
          left: -1,
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
          top: CANVAS_HEIGHT * 0.5 - 1,
          left: CANVAS_WIDTH * 0.5 - 1,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
]

export const ASPECT_RATIOS: AspectRatioType[] = [
  {
    name: "1:1",
    nickname: "Square",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(1, 1, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_2)'%3E%3Crect x='0.5' y='0.5' width='29' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_2)'%3E%3Cpath d='M9.6014 26.9266H2.97553V20.3007L4.15162 20.3007L4.15162 25.7505L9.6014 25.7505V26.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_2)'%3E%3Cpath d='M20.3007 2.97552H26.9266V9.60139L25.7505 9.60139L25.7505 4.15161L20.3007 4.15161V2.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-1 22.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(30.9021 6.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "2:1",
    nickname: "FB Post",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(2, 1, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_14)'%3E%3Crect x='0.5' y='7.5' width='29' height='14' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_14)'%3E%3Cpath d='M8.6014 19.9266H1.97553V13.3007L3.15162 13.3007L3.15162 18.7505L8.6014 18.7505V19.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_14)'%3E%3Cpath d='M21.3007 8.97552H27.9266V15.6014L26.7505 15.6014L26.7505 10.1516L21.3007 10.1516V8.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_14'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_14'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-2 15.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_14'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(31.9021 12.951) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "2:3",
    nickname: "Pinterest Pin",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(2, 3, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_21)'%3E%3Crect x='5.5' y='0.5' width='19' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_21)'%3E%3Cpath d='M13.6014 27.9266H6.97553V21.3007L8.15162 21.3007L8.15162 26.7505L13.6014 26.7505V27.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_21)'%3E%3Cpath d='M16.3007 1.97552H22.9266V8.60139L21.7505 8.60139L21.7505 3.15161L16.3007 3.15161V1.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_21'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_21'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(3 23.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_21'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(26.9021 5.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "3:1",
    nickname: "Twitter Header",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(3, 1, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_28)'%3E%3Crect x='0.5' y='10.5' width='29' height='9' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_28)'%3E%3Cpath d='M6.54244 18.0284H1.8284V13.3144L2.66514 13.3144L2.66514 17.1917L6.54244 17.1917V18.0284Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_28)'%3E%3Cpath d='M23.4289 11.8284H28.143V16.5425L27.3062 16.5425L27.3062 12.6652L23.4289 12.6652V11.8284Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_28'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_28'%3E%3Crect width='8' height='8' fill='white' transform='translate(-1 15.2) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_28'%3E%3Crect width='8' height='8' fill='white' transform='translate(31.3137 14.6569) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "3:4",
    nickname: "Twitter Tall Photo",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(3, 4, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_2)'%3E%3Crect x='4.5' y='0.5' width='21' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_2)'%3E%3Cpath d='M12.6014 27.9266H5.97553V21.3007L7.15162 21.3007L7.15162 26.7505L12.6014 26.7505V27.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_2)'%3E%3Cpath d='M17.3007 1.97552H23.9266V8.60139L22.7505 8.60139L22.7505 3.15161L17.3007 3.15161V1.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(2 23.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(27.9021 5.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "4:3",
    nickname: "Standard",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(4, 3, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_9)'%3E%3Crect x='0.5' y='4.5' width='29' height='22' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_9)'%3E%3Cpath d='M8.6014 24.9266H1.97553V18.3007L3.15162 18.3007L3.15162 23.7505L8.6014 23.7505V24.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_9)'%3E%3Cpath d='M21.3007 5.97552H27.9266V12.6014L26.7505 12.6014L26.7505 7.15161L21.3007 7.15161V5.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_9'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_9'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-2 20.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_9'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(31.9021 9.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "9:16",
    nickname: "Stories",
    getCanvasSize: (WIDTH, HEIGHT) =>
      calculateAspectRatio(9, 16, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_23)'%3E%3Crect x='7.5' y='0.5' width='15.8' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_23)'%3E%3Cpath d='M15.6014 27.9266H8.97553V21.3007L10.1516 21.3007L10.1516 26.7505L15.6014 26.7505V27.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_23)'%3E%3Cpath d='M15.3007 1.97555H21.9266V8.60142L20.7505 8.60142L20.7505 3.15164L15.3007 3.15164V1.97555Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_23'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_23'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(5 23.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_23'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(25.9021 5.95108) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "16:9",
    nickname: "Cinematic",
    getCanvasSize: (WIDTH, HEIGHT) =>
      calculateAspectRatio(16, 9, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_16)'%3E%3Crect x='0.5' y='7.5' width='29' height='16' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_16)'%3E%3Cpath d='M8.6014 21.9266H1.97553V15.3007L3.15162 15.3007L3.15162 20.7505L8.6014 20.7505V21.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_16)'%3E%3Cpath d='M21.3007 8.97552H27.9266V15.6014L26.7505 15.6014L26.7505 10.1516L21.3007 10.1516V8.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_16'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_16'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-2 17.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_16'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(31.9021 12.951) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
]
