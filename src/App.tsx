import Canvas from "@/components/Canvas"
import EditingPanel from "@/components/EditingPanel"
import Header from "@/components/Header"
import store from "@/redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div className="mx-2 max-w-xl sm:mx-auto">
        <header>
          <Header />
        </header>

        <main>
          <Canvas />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  )
}

export default App
