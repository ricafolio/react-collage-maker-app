import {
  OBJECT_LOCKED,
  ASPECT_RATIOS,
  COLLAGE_TEMPLATES,
} from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { RootStateType } from "@/redux/store"
import * as fabric from "fabric"
import { useEffect, useRef, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { changeTab, setCanvas } from "@/redux/settingsSlice"

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [uploads, setUploads] = useState(0)
  const dispatch = useAppDispatch()

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
        controlsAboveOverlay: false,
        allowTouchScrolling: true,
        imageSmoothingEnabled: false,
      })

      // 1.1 Clone canvas
      dispatch(setCanvas(canvas))

      // 1.2 Reset upload count
      setUploads(0)

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
                  
                  // Scale accordingly to look good
                  if (config.scaleTo === "width") {
                    img.scaleToWidth(selectedCell.width + 1)
                  } else if (config.scaleTo === "height") {
                    img.scaleToHeight(selectedCell.height + 1)
                  }

                  canvas.add(img)
                  canvas.setActiveObject(img)
                }
                addImage(dataUrl)
              }

              // Render in canvas
              canvas.remove(selectedCell)
              canvas.renderAll()
              toast.success("Image successfully added.")
              
              // Increment upload count
              setUploads((prevUploads) => prevUploads + 1)

              // Switch to More tab, to show controls on active object
              dispatch(changeTab("more"))
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

      // 7. Change tab when an object is selected
      canvas.on('selection:created', () => {
        dispatch(changeTab("more"))
      });

      // 8. Clean up the canvas when the component unmounts
      return () => {
        canvas.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRatioIndex, activeTemplateIndex])

  return (
    <>
      <Toaster />
      <div className="h-screen flex items-center justify-center">
        <canvas ref={canvasRef} />
      </div>
      <div className="hidden">
        <input ref={inputRef} type="file" accept="image/*" className="hidden" />
      </div>
    </>
  )
}
