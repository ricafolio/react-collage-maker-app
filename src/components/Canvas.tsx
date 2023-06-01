import DownloadIcon from "./icons/DownloadIcon"
import {
  OBJECT_LOCKED,
  ASPECT_RATIOS,
  COLLAGE_TEMPLATES,
} from "@/constants/canvasConfig"
import { useAppSelector } from "@/redux/hooks"
import { RootStateType } from "@/redux/store"
import * as fabric from "fabric"
import { useEffect, useRef } from "react"

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.settings.template
  )
  const activeRatioIndex = useAppSelector(
    (state: RootStateType) => state.settings.ratio
  )
  const activeTemplate = COLLAGE_TEMPLATES[activeTemplateIndex]
  const ratio = ASPECT_RATIOS[activeRatioIndex]

  useEffect(() => {
    if (canvasRef.current) {
      // 1. Setup canvas
      const canvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "#1a1a1a",
        width: ratio.canvas.width,
        height: ratio.canvas.height,
        selection: false,
        controlsAboveOverlay: false
      })

      // 2. Setup objects & its properties
      activeTemplate.config.forEach((config) => {
        const PROPERTIES = config.rectFabric(
          ratio.canvas.height,
          ratio.canvas.width
        )
        const cell = new fabric.Rect(PROPERTIES).set(OBJECT_LOCKED)

        // 3. Define image upload event handler
        const handleImageUpload = (selectedCell: fabric.Rect) => {
          const input = inputRef.current
          if (input) {
            input.onchange = async (event) => {
              const target = event.target as HTMLInputElement
              const file = target.files && target.files[0]
              if (!file) return

              // 1. Load uploaded file as Base64
              const reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onload = (e) => {
                const dataUrl = e.target?.result as string
                // 1.1 Load image as fabric image
                const addImage = async (imageBase64: string) => {
                  const img = await fabric.Image.fromURL(imageBase64)
                  // Set position to selected cell
                  img.set({
                    left: selectedCell.left,
                    top: selectedCell.top,
                    selectable: true,
                    hasControls: true,
                    clipPath: selectedCell,
                    perPixelTargetFind: true,
                  })
                  img.scaleToWidth(ratio.canvas.width + 1)
                  canvas.add(img)
                }
                addImage(dataUrl)
              }

              // Render in canvas
              canvas.remove(selectedCell)
              canvas.renderAll()
            }

            input.click()
            input.value = ""
          }
        }

        // 4. Attach event handler
        cell.on("mouseup", () => {
          handleImageUpload(cell)
        })

        // 5. Render
        canvas.add(cell)
      })

      // 6. Render all looped objects
      canvas.renderAll()

      // 7. Clean up the canvas when the component unmounts
      return () => {
        canvas.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRatioIndex || activeTemplateIndex])

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
      <div className="hidden">
        <input ref={inputRef} type="file" accept="image/*" className="hidden" />
        <a ref={linkRef} id="download" className="hidden"></a>
      </div>
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
