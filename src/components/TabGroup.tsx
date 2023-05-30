import { useState } from "react"
import { SelectedTabType } from "@/types"

export default function TabGroup() {
  const [selected, setSelected] = useState<SelectedTabType>("template")
  const tabStyle = "transition-colors rounded-b p-3 bg-black hover:bg-neutral-950"
  const activeTabStyle = "transition-colors rounded-b p-3 bg-neutral-900"
  const getStyle = (tab: SelectedTabType) => {
    return selected === tab ? activeTabStyle : tabStyle
  }

  return (
    <>
      <div className="bg-neutral-900 h-24 rounded-t overflow-x-auto scrollbar-hide">
        {/* To do content here */}
      </div>
      <div className="grid grid-flow-col justify-stretch gap-x-1">
        <button className={`${getStyle("template")}`} onClick={() => setSelected("template")}>Template</button>
        <button className={`${getStyle("ratio")}`} onClick={() => setSelected("ratio")}>Ratio</button>
        <button className={`${getStyle("more")}`} onClick={() => setSelected("more")}>More..</button>
      </div>
    </>
  )
}
