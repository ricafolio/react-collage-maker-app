import Canvas from "@/components/Canvas"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Provider } from "react-redux"
import store from "@/redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="mx-auto max-w-xl">
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
