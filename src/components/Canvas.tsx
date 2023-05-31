import * as fabric from "fabric";
import { useEffect, useRef } from "react";
import DownloadIcon from "./icons/DownloadIcon";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement | null>(null)

  const CANVAS_WIDTH = 576
  const CANVAS_HEIGHT = 576
  const OBJECT_LOCKED = {
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

  useEffect(() => {
    if (canvasRef.current) {
      // 1. Setup canvas
      const canvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "#808080",
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        selection: false,
      })

      // 2. Setup objects & its properties
      const rectTop = new fabric.Rect({
        fill: "yellow",
        height: CANVAS_HEIGHT * 0.5,
        width: CANVAS_WIDTH,
        top: 0,
        hoverCursor: "pointer",
      }).set(OBJECT_LOCKED)

      const rectBottom = new fabric.Rect({
        fill: "blue",
        height: CANVAS_HEIGHT * 0.5,
        width: CANVAS_WIDTH + 1,
        top: CANVAS_HEIGHT + 1,
        left: -1,
        originY: "bottom",
        hoverCursor: "pointer",
      }).set(OBJECT_LOCKED)

      canvas.add(rectTop)
      canvas.add(rectBottom)
      canvas.renderAll()

      // 3. Clean up the canvas when the component unmounts
      return () => {
        canvas.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const downloadImage = () => {
    if (canvasRef.current && linkRef.current) {
      const canvas = canvasRef.current
      linkRef.current.href = canvas.toDataURL()
      linkRef.current.download = `collage-${new Date().getTime()}.png`
      linkRef.current.click()
    }
  }

  return (
    <>
      <canvas ref={canvasRef} />
      <a ref={linkRef} className="hidden"></a>
      <button className="w-full mt-4 text-sm bg-indigo-600 hover:bg-indigo-700 transition-colors rounded font-semibold transition px-5 py-3 flex justify-center items-center" onClick={downloadImage}>
        <DownloadIcon className="mr-2" />
        <span>Download image</span>
      </button>
    </>
  )
}