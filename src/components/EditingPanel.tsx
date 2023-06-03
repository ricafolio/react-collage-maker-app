import DownloadButton from "./DownloadButton"

import TabFilters from "./TabFilters"
import TabRatio from "./TabRatio"
import TabTemplate from "./TabTemplate"

import RatioIcon from "./icons/RatioIcon"
import TemplateIcon from "./icons/TemplateIcon"
import FiltersIcon from "./icons/FiltersIcon"

import { SelectedTabType } from "@/types"
import { RootStateType } from "@/redux/store"

import { changeTab } from "@/redux/settingsSlice"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"

export default function EditingPanel() {
  const selected = useAppSelector(
    (state: RootStateType) => state.settings.tab
  )
  const dispatch = useAppDispatch()

  const sharedTabStyle = "flex justify-center items-center transition-colors p-3"
  const inactiveTabStyle = `${sharedTabStyle} bg-black hover:bg-neutral-950`
  const activeTabStyle = `${sharedTabStyle} bg-neutral-900`
  
  const getStyle = (tab: SelectedTabType) => {
    return selected === tab ? activeTabStyle : inactiveTabStyle
  }

  return (
    <>
      <div id="tabs" className="scrollbar-hide overflow-x-auto grid grid-flow-col justify-stretch gap-x-1 mx-2 sm:mx-0">
        <button
          className={`${getStyle("template")}`}
          onClick={() => dispatch(changeTab("template"))}
        >
          <TemplateIcon className="mr-2 sm:text-xs md:text-base" />
          <span className="text-base sm:text-xs md:text-base">Template</span>
        </button>
        <button
          className={`${getStyle("ratio")}`}
          onClick={() => dispatch(changeTab("ratio"))}
        >
          <RatioIcon className="mr-2 sm:text-xs md:text-base" />
          <span className="text-base sm:text-xs md:text-base">Ratio</span>
        </button>
        <button
          className={`${getStyle("more")}`}
          onClick={() => dispatch(changeTab("more"))}
        >
          <FiltersIcon className="mr-2 sm:text-xs md:text-base" />
          <span className="text-base sm:text-xs md:text-base">Filters</span>
        </button>
      </div>

      <div id="tabContent" className="
        scrollbar-hide bg-neutral-900 p-2 mx-2 sm:mx-0
        h-28 flex items-center overflow-x-auto overflow-y-hidden
        sm:h-screen sm:block sm:overflow-x-hidden sm:overflow-y-scroll
      ">
        {selected === "template" && <TabTemplate />}
        {selected === "ratio" && <TabRatio />}
        {selected === "more" && <TabFilters />}
      </div>

      <div className="sm:fixed bottom-0 left-0 pb-4 px-2 sm:p-4">
        <DownloadButton />
      </div>
    </>
  )
}
