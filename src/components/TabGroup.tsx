import RatioIcon from "./icons/RatioIcon"
import TemplateIcon from "./icons/TemplateIcon"

import TabMore from "./TabMore"
import TabRatio from "./TabRatio"
import TabTemplate from "./TabTemplate"

import { SelectedTabType } from "@/types"
import { useState } from "react"

export default function TabGroup() {
  const [selected, setSelected] = useState<SelectedTabType>("template")
  const sharedTabStyle = "flex justify-center items-center transition-colors rounded-b p-3"
  const inactiveTabStyle = `${sharedTabStyle} bg-black hover:bg-neutral-950`
  const activeTabStyle = `${sharedTabStyle} bg-neutral-900`

  const getStyle = (tab: SelectedTabType) => {
    return selected === tab ? activeTabStyle : inactiveTabStyle
  }

  return (
    <>
      <div className="flex items-center scrollbar-hide h-28 p-2 overflow-y-hidden overflow-x-auto rounded-t bg-neutral-900">
        {selected === "template" && <TabTemplate />}
        {selected === "ratio" && <TabRatio />}
        {selected === "more" && <TabMore />}
      </div>
      <div className="grid grid-flow-col justify-stretch gap-x-1">
        <button
          className={`${getStyle("template")}`}
          onClick={() => setSelected("template")}
        >
          <TemplateIcon className="mr-2" />
          <span>Template</span>
        </button>
        <button
          className={`${getStyle("ratio")}`}
          onClick={() => setSelected("ratio")}
        >
          <RatioIcon className="mr-2" />
          <span>Ratio</span>
        </button>
        <button
          className={`${getStyle("more")}`}
          onClick={() => setSelected("more")}
        >
          More..
        </button>
      </div>
    </>
  )
}
