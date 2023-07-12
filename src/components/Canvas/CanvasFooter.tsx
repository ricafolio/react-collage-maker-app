export default function CanvasFooter() {
  return (
    <footer className="hidden w-full text-center sm:block">
      <a
        href="https://github.com/ricafolio/react-canvas-collage-maker/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-600 transition-colors hover:text-gray-200"
      >
        Source code
      </a>
      <span className="mx-3 text-gray-700">&middot;</span>
      <a
        href="https://ricafolio.me"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-600 transition-colors hover:text-gray-200"
      >
        ricafolio.me
      </a>
    </footer>
  )
}
