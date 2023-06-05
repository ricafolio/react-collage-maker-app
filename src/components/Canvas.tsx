import {
  OBJECT_LOCKED,
  ASPECT_RATIOS,
  COLLAGE_TEMPLATES,
} from "@/constants/canvasConfig"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import {
  changeTab,
  setCanvas,
  increaseUploadCount,
  resetUploadCount,
  newImage,
  setSelectedImage,
  clearSelectedImage,
} from "@/redux/settingsSlice"
import { RootStateType } from "@/redux/store"
import { CustomImageObject } from "@/types"
import * as fabric from "fabric"
import { useEffect, useRef } from "react"
import toast from "react-hot-toast"

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // Get necessary data from Redux store
  const dispatch = useAppDispatch()
  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.settings.template
  )
  const activeRatioIndex = useAppSelector(
    (state: RootStateType) => state.settings.ratio
  )
  const activeTemplate = COLLAGE_TEMPLATES[activeTemplateIndex]

  // Canvas initialization
  useEffect(() => {
    if (canvasRef.current && wrapperRef.current) {
      // 0. Calculate canvas ratio by initial client width
      const panelWidth =
        wrapperRef.current.clientWidth > 640
          ? 640 // fixed 640px canvas on >640px devices
          : wrapperRef.current.clientWidth - 16 // 16px margin
      const ratio = ASPECT_RATIOS[activeRatioIndex].canvas(panelWidth)

      // 1. Setup canvas
      const canvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "#1a1a1a",
        width: ratio.width,
        height: ratio.height,
        selection: false,
        controlsAboveOverlay: false,
        allowTouchScrolling: true,
        imageSmoothingEnabled: false,
      })

      // 1.1 Clone canvas
      dispatch(setCanvas(canvas))

      // 1.2 Reset upload count
      dispatch(resetUploadCount())

      // 2. Setup objects & its properties
      activeTemplate.config.forEach((config) => {
        const PROPERTIES = config.rectFabric(ratio.height, ratio.width)
        const cell = new fabric.Rect(PROPERTIES).set(OBJECT_LOCKED)

        // 3. Define image upload event handler
        const handleImageUpload = (selectedCell: fabric.Rect) => {
          const input = inputRef.current
          if (input) {
            input.onchange = async (event) => {
              const target = event.target as HTMLInputElement
              const file = target.files && target.files[0]
              if (!file) return

              // Load uploaded file as Base64
              const reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onload = (e) => {
                const dataUrl = e.target?.result as string
                // Load image as fabric image
                const addImage = async (imageBase64: string) => {
                  const img = await fabric.Image.fromURL(imageBase64)
                  const imgId = `img_${new Date().getTime()}`

                  // Set position to selected cell
                  img.set({
                    id: imgId,
                    left: selectedCell.left,
                    top: selectedCell.top,
                    selectable: true,
                    hasControls: true,
                    clipPath: selectedCell,
                    perPixelTargetFind: true,
                  }) as CustomImageObject

                  // Scale accordingly to look good
                  if (config.scaleTo === "width") {
                    img.scaleToWidth(selectedCell.width + 1)
                  } else if (config.scaleTo === "height") {
                    img.scaleToHeight(selectedCell.height + 1)
                  }

                  // Save image in redux
                  dispatch(
                    newImage({
                      id: imgId,
                      filters: {
                        brightness: 0,
                        contrast: 0,
                        noise: 0,
                        saturation: 0,
                        vibrance: 0,
                        blur: 0,
                      },
                    })
                  )

                  canvas.add(img)
                  canvas.setActiveObject(img)
                }
                addImage(dataUrl)
              }

              // Render in canvas
              canvas.remove(selectedCell)
              canvas.renderAll()
              toast.success("Image successfully added.", {
                id: "toast-uploaded",
              })

              // Increment upload count
              dispatch(increaseUploadCount())

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

      // 7. Attach event handler on object selection
      const handleImageSelect = (selected: CustomImageObject) => {
        // Change tab on select
        dispatch(changeTab("more"))

        // Set selected image
        dispatch(setSelectedImage(selected.id))
      }

      canvas.on("selection:created", ({ selected }) => {
        handleImageSelect(selected[0] as CustomImageObject)
      })

      canvas.on("selection:updated", ({ selected }) => {
        handleImageSelect(selected[0] as CustomImageObject)
      })

      canvas.on("selection:cleared", () => {
        dispatch(clearSelectedImage())
      })

      // 8. Clean up the canvas when the component unmounts
      return () => {
        canvas.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRatioIndex, activeTemplateIndex])

  return (
    <div ref={wrapperRef}>
      <div className="flex items-start justify-center py-2 sm:min-h-screen sm:py-8">
        <canvas ref={canvasRef} />
      </div>
      <div className="hidden">
        <input ref={inputRef} type="file" accept="image/*" className="hidden" />
      </div>
      <div className="hidden w-full text-center sm:block">
        <a
          href="https://github.com/ricafolio/react-canvas-collage-maker/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-600 transition-colors hover:text-gray-200"
        >
          Source code
        </a>
        <span className="mx-3 text-gray-700">&middot;</span>
        <a
          href="https://ricafolio.me"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-600 transition-colors hover:text-gray-200"
        >
          ricafolio.me
        </a>
      </div>
    </div>
  )
}
