import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import type { RootStateType } from "@/redux/store"
import DownloadIcon from "./icons/DownloadIcon"
import toast, { Toaster } from "react-hot-toast"
import { useAppSelector } from "@/redux/hooks"
import { useRef } from "react"

export default function DownloadButton() {
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  
  const canvas = useAppSelector(
    (state: RootStateType) => state.settings.canvas
  )
  const uploaded = useAppSelector(
    (state: RootStateType) => state.settings.uploaded
  )
  const activeTemplateConfig = useAppSelector(
    (state: RootStateType) => COLLAGE_TEMPLATES[state.settings.template].config
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
      <Toaster />
      <a ref={linkRef} id="download" className="hidden"></a>
      <button
        className="mt-4 flex w-full items-center justify-center rounded bg-indigo-600 px-5 py-3 text-sm font-semibold transition transition-colors hover:bg-indigo-700 disabled:bg-gray-500"
        onClick={downloadImage}
        disabled={uploaded !== activeTemplateConfig.length}
      >
        <DownloadIcon className="mr-2" />
        <span>Download <span className="inline sm:hidden md:inline">collage</span></span>
      </button>
    </>
  )
}
