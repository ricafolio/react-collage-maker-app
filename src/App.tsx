import Canvas from "@/components/Canvas"
import EditingPanel from "@/components/EditingPanel"
import { Provider } from "react-redux"
import store from "@/redux/store"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-row flex-wrap">
        <Toaster />

        <aside className="w-full sm:w-3/12 order-2 sm:order-1 sm:border-r border-gray-800 sm:bg-neutral-900">
          <EditingPanel />
        </aside>

        <main className="w-full sm:w-9/12 order-1 sm:order-2">
          <Canvas />
        </main>
      </div>
    </Provider>
  )
}

export default App
