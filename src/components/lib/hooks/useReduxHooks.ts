import type { RootStateType } from "@/redux/store"
import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useAppSelector } from "@/redux/hooks"

function useCanvasData() {
  const canvas = useAppSelector(
    (state: RootStateType) => state.canvas.canvas
  )
  return { canvas }
}

function useCanvasImageData() {
  const uploadCount = useAppSelector(
    (state: RootStateType) => state.selection.images.length
  )
  const maxImageUploads = useAppSelector(
    (state: RootStateType) => COLLAGE_TEMPLATES[state.canvas.template].config
  ).length

  return { uploadCount, maxImageUploads }
}

export { 
  useCanvasData,
  useCanvasImageData
}
