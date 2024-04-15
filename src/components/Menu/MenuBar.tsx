import DownloadButton from "@/components/Button/DownloadButton"
import CreatorLink from "@/components/Menu/CreatorLink"
import GithubLink from "@/components/Menu/GithubLink"

export default function MenuBar() {
  return (
    <section className="flex h-12 w-full items-center justify-end bg-neutral-900">
      <GithubLink />
      <CreatorLink />
      <DownloadButton />
    </section>
  )
}
