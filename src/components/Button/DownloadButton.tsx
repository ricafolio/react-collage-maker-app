import DownloadIcon from "@/components/Icon/DownloadIcon"
import { useCanvasData, useCanvasImageData } from "@/hooks/useReduxData"
import clsx from "clsx"
import { useRef } from "react"
import toast from "react-hot-toast"

export default function DownloadButton() {
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const { canvas } = useCanvasData()
  const { uploadCount, maxImageUploads } = useCanvasImageData()

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
    <div className={clsx("bottom-0 left-0 px-2 pb-4", "sm:fixed sm:p-4")}>
      <a ref={linkRef} id="download" className="hidden"></a>
      <button
        className={clsx([
          "flex w-full items-center justify-center",
          "mt-4 px-5 py-3 text-sm font-semibold",
          "transition transition-colors",
          "rounded bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500",
        ])}
        onClick={downloadImage}
        disabled={uploadCount !== maxImageUploads}
      >
        <DownloadIcon className="mr-2" />
        <span>
          Download <span className="inline sm:hidden md:inline">collage</span>
        </span>
      </button>
    </div>
  )
}
