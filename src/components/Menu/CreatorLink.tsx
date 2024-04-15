export default function CreatorLink() {
  return (
    <a
      href="https://ricafolio.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 hover:bg-neutral-800"
      title="Made by Ricafolio :)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#757575"
          d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-2.332l2.2 2.932a1 1 0 0 0 1.4.2l.096-.081A1 1 0 0 0 14.8 15.4l-1.903-2.538l.115-.037A3.001 3.001 0 0 0 12 7m0 2a1 1 0 0 1 0 2h-1V9z"
        ></path>
      </svg>
      <span className="hidden">Ricafolio.dev</span>
    </a>
  )
}
