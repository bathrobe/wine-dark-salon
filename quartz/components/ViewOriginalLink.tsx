import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/viewOriginalLink.scss"

const SOURCE_PREFIX = "Sources/"

const ViewOriginalLink = ({ fileData, displayClass }: QuartzComponentProps) => {
  const url = fileData.frontmatter?.url
  const slug = fileData.slug ?? ""

  if (typeof url !== "string" || url.trim() === "" || !slug.startsWith(SOURCE_PREFIX)) {
    return null
  }

  return (
    <p class={classNames(displayClass, "view-original-link")}>
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label="View original source">
        View original
      </a>
    </p>
  )
}

ViewOriginalLink.css = style

export default (() => ViewOriginalLink) satisfies QuartzComponentConstructor

