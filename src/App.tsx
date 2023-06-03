import Canvas from "@/components/Canvas"
import EditingPanel from "@/components/EditingPanel"
import { Provider } from "react-redux"
import store from "@/redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-row flex-wrap">
        <aside className="w-full sm:w-4/12 md:w-3/12 order-2 sm:order-1">
          <EditingPanel />
        </aside>

        <main className="w-full sm:w-8/12 md:w-9/12 order-1 sm:order-2">
          <Canvas />
        </main>
      </div>
    </Provider>
  )
}

export default App
