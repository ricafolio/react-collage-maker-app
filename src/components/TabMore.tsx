import { useAppSelector } from "@/redux/hooks"
import { RootStateType } from "@/redux/store"
import { useRef } from "react"

export default function TabMore() {
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const clonedCanvas = useAppSelector(
    (state: RootStateType) => state.settings.canvas
  )

  function handleClick() {
    console.log(clonedCanvas)

    if (clonedCanvas && linkRef.current) {
      clonedCanvas.discardActiveObject()
      linkRef.current.href = clonedCanvas.toDataURL()
      linkRef.current.download = `collage-${new Date().getTime()}.png`
      linkRef.current.click()
    }
  }

  return (
    <div className="kek">
      <button type="button" onClick={handleClick} className="bg-blue-600 p-5">
        CLICK ME!
      </button>
      <a ref={linkRef} id="download" className="hidden"></a>
    </div>
  )
}