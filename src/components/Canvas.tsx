import DownloadIcon from "./icons/DownloadIcon"
import * as fabric from "fabric"
import { useEffect, useRef } from "react"

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
        backgroundColor: "#232323",
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

      // 2.1 Define image upload event handler
      const handleImageUpload = (gridCell: fabric.Rect) => {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = "image/*"

        input.onchange = async (event) => {
          const target = event.target as HTMLInputElement
          const file = target.files && target.files[0]
          if (!file) return

          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = (e) => {
            const dataUrl = e.target?.result as string
            const addImage = async (imageBase64: string) => {
              const img = await fabric.Image.fromURL(imageBase64)
              img.set({
                left: gridCell.left,
                top: gridCell.top,
                selectable: true,
                hasControls: true,
                // clipPath: new fabric.Rect({
                //   originY: "top",
                //   height: CANVAS_HEIGHT * 0.5,
                //   width: CANVAS_WIDTH,
                // }),
              })
              canvas.add(img)
            }
            addImage(dataUrl)
          }

          canvas.remove(gridCell)
          canvas.renderAll()
        }

        input.click()
      }

      // 3. Attach event handler
      rectTop.on("mouseup", () => {
        handleImageUpload(rectTop)
      })
      rectBottom.on("mouseup", () => {
        handleImageUpload(rectBottom)
      })

      // 4. Render
      canvas.add(rectTop)
      canvas.add(rectBottom)
      canvas.renderAll()

      // 5. Clean up the canvas when the component unmounts
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
      <button
        className="mt-4 flex w-full items-center justify-center rounded bg-indigo-600 px-5 py-3 text-sm font-semibold transition transition-colors hover:bg-indigo-700"
        onClick={downloadImage}
      >
        <DownloadIcon className="mr-2" />
        <span>Download image</span>
      </button>
    </>
  )
}
