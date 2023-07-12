import clsx from "clsx"

import TabTemplate from "@/components/Tab/TabTemplate"
import TabFilters from "@/components/Tab/TabFilters"
import TabRatio from "@/components/Tab/TabRatio"

import { useTabData } from "@/hooks/useReduxData"

export default function TabContent() {
  const { activeTab } = useTabData()

  return (
    <div data-testid="tabContent" className={clsx([
      "scrollbar-hide bg-neutral-900",
      "h-28 mx-2 p-2",
      "flex items-center overflow-x-auto overflow-y-hidden",
      "sm:min-h-screen sm:mx-0 sm:block sm:overflow-x-hidden sm:overflow-y-auto"
    ])}>
      {activeTab === "template" && <TabTemplate />}
      {activeTab === "ratio" && <TabRatio />}
      {activeTab === "filters" && <TabFilters />}
    </div>
  )
}
