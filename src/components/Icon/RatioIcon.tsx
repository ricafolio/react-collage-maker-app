import { SVGProps } from "react"

export default function RatioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.15em"
      height="1.15em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 3.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V4.586L4.586 11.05H7.5a.45.45 0 0 1 0 .9h-4a.45.45 0 0 1-.45-.45v-4a.45.45 0 1 1 .9 0v2.914l6.464-6.464H7.5a.45.45 0 1 1 0-.9h4Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
