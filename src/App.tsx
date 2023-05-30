import Canvas from "@/components/Canvas"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

function App() {
  return (
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
  )
}

export default App
