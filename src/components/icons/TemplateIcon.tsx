import { SVGProps } from "react"

export default function TemplateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 2H8v5h5V2.5a.5.5 0 0 0-.5-.5Zm.5 6H8v5h4.5a.5.5 0 0 0 .5-.5V8ZM7 7V2H2.5a.5.5 0 0 0-.5.5V7h5ZM2 8v4.5a.5.5 0 0 0 .5.5H7V8H2Zm.5-7A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
