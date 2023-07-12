import clsx from "clsx"

import { SelectedTabType, TabItem } from "@/types"
import { useTabAction } from "@/lib/hooks/useReduxAction"
import { useTabData } from "@/lib/hooks/useReduxData"

export default function TabButton({ id, icon }: TabItem) {
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
      <button
        className={getStyle(id)}
        onClick={() => changeTabAction(id)}
      >
        {icon}
        <span className={clsx(
          "sm:hidden lg:inline lg:text-sm xl:text-base",
          "sm:ml-0 lg:ml-2 ml-2",
          "capitalize"
        )}>
          {id}
        </span>
      </button>
    </>
  )
}
