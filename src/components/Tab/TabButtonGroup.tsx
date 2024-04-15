import FiltersIcon from "@/components/Icon/FiltersIcon"
import RatioIcon from "@/components/Icon/RatioIcon"
import TemplateIcon from "@/components/Icon/TemplateIcon"
import TabButton from "@/components/Tab/TabButton"
import { TabItem } from "@/types"

export default function TabButtonGroup() {
  const tabs: TabItem[] = [
    {
      id: "template",
      icon: <TemplateIcon />,
    },
    {
      id: "ratio",
      icon: <RatioIcon />,
    },
    {
      id: "more",
      icon: <FiltersIcon />,
    },
  ]

  return (
    <div
      data-testid="tabs"
      className="scrollbar-hide mx-2 grid grid-flow-col justify-stretch overflow-x-auto sm:mx-0"
    >
      {tabs.map((tab) => {
        return (
          <TabButton key={`tab-btn-${tab.id}`} id={tab.id} icon={tab.icon} />
        )
      })}
    </div>
  )
}
