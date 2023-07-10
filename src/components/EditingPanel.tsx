import clsx from "clsx"
import DownloadButton from "./DownloadButton"

import TabFilters from "./TabFilters"
import TabRatio from "./TabRatio"
import TabTemplate from "./TabTemplate"

import RatioIcon from "./icons/RatioIcon"
import TemplateIcon from "./icons/TemplateIcon"
import FiltersIcon from "./icons/FiltersIcon"

import { SelectedTabType } from "@/types"
import { useTabData } from "./lib/hooks/useReduxData"
import { useTabAction } from "./lib/hooks/useReduxAction"

export default function EditingPanel() {
  const { changeTabAction } = useTabAction()
  const { activeTab } = useTabData()

  const sharedTabStyle = "flex justify-center items-center transition-colors p-3"
  const inactiveTabStyle = clsx(sharedTabStyle, "bg-black hover:bg-neutral-950")
  const activeTabStyle = clsx(sharedTabStyle, "bg-neutral-900")

  const getStyle = (tab: SelectedTabType) => {
    return activeTab === tab ? activeTabStyle : inactiveTabStyle
  }

  return (
    <>
      <div data-testid="tabs" className="scrollbar-hide overflow-x-auto grid grid-flow-col justify-stretch mx-2 sm:mx-0">
        <button
          className={`${getStyle("template")}`}
          onClick={() => changeTabAction("template")}
        >
          <TemplateIcon className="mr-2 sm:mr-0 lg:mr-2 sm:text-lg" />
          <span className="sm:hidden lg:inline lg:text-sm xl:text-base">Template</span>
        </button>
        <button
          className={`${getStyle("ratio")}`}
          onClick={() => changeTabAction("ratio")}
        >
          <RatioIcon className="mr-2 sm:mr-0 lg:mr-2 sm:text-lg" />
          <span className="sm:hidden lg:inline lg:text-sm xl:text-base">Ratio</span>
        </button>
        <button
          className={`${getStyle("more")}`}
          onClick={() => changeTabAction("more")}
        >
          <FiltersIcon className="mr-2 sm:mr-0 lg:mr-2 sm:text-lg" />
          <span className="sm:hidden lg:inline lg:text-sm xl:text-base">Filters</span>
        </button>
      </div>

      <div data-testid="tabContent" className={clsx([
        "scrollbar-hide bg-neutral-900",
        "h-28 mx-2 p-2",
        "flex items-center overflow-x-auto overflow-y-hidden",
        "sm:min-h-screen sm:mx-0 sm:block sm:overflow-x-hidden sm:overflow-y-auto"
      ])}>
        {activeTab === "template" && <TabTemplate />}
        {activeTab === "ratio" && <TabRatio />}
        {activeTab === "more" && <TabFilters />}
      </div>

      <div className={clsx("bottom-0 left-0 pb-4 px-2", "sm:fixed sm:p-4")}>
        <DownloadButton />
      </div>
    </>
  )
}
