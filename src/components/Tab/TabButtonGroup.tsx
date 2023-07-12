import { TabItem } from "@/types"

import RatioIcon from "@/components/Icon/RatioIcon"
import TemplateIcon from "@/components/Icon/TemplateIcon"
import FiltersIcon from "@/components/Icon/FiltersIcon"

import TabButton from "@/components/Tab/TabButton"

export default function TabButtonGroup() {
  const tabs: TabItem[] = [
    {
      id: "template",
      icon: <TemplateIcon />
    },
    {
      id: "ratio",
      icon: <RatioIcon />
    },
    {
      id: "more",
      icon: <FiltersIcon />
    }
  ]

  return (
    <div data-testid="tabs" className="scrollbar-hide overflow-x-auto grid grid-flow-col justify-stretch mx-2 sm:mx-0">
      {tabs.map((tab) => {
        return (
          <TabButton
            key={`tab-btn-${tab.id}`}
            id={tab.id}
            icon={tab.icon}
          />
        )
      })}
    </div>
  )
}
