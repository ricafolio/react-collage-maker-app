import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import type { RootStateType } from "@/redux/store"
import DownloadIcon from "./icons/DownloadIcon"
import toast from "react-hot-toast"
import { useAppSelector } from "@/redux/hooks"
import { useRef } from "react"
import clsx from "clsx"

export default function DownloadButton() {
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  
  const canvas = useAppSelector(
    (state: RootStateType) => state.canvas.canvas
  )
  const uploaded = useAppSelector(
    (state: RootStateType) => state.selection.images.length
  )
  const activeTemplateConfig = useAppSelector(
    (state: RootStateType) => COLLAGE_TEMPLATES[state.canvas.template].config
  )

  const downloadImage = () => {
    if (canvas && linkRef.current) {
      canvas.discardActiveObject()
      linkRef.current.href = canvas.toDataURL()
      linkRef.current.download = `collage-${new Date().getTime()}.png`
      linkRef.current.click()
      toast.success("Collage downloaded.", { id: "toast-download" })
    } else {
      toast.error("Cannot download collage! :(", { id: "toast-download" })
    }
  }

  return (
    <>
      <a ref={linkRef} id="download" className="hidden"></a>
      <button
        className={clsx([
          "w-full flex items-center justify-center",
          "mt-4 px-5 py-3 text-sm font-semibold",
          "transition transition-colors",
          "rounded bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500"
        ])}
        onClick={downloadImage}
        disabled={uploaded !== activeTemplateConfig.length}
      >
        <DownloadIcon className="mr-2" />
        <span>Download <span className="inline sm:hidden md:inline">collage</span></span>
      </button>
    </>
  )
}
