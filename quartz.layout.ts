import { PageLayout, SharedLayout } from "./quartz/cfg"
import ArticleTitle from "./quartz/components/ArticleTitle"
import Breadcrumbs from "./quartz/components/Breadcrumbs"
import Backlinks from "./quartz/components/Backlinks"
import ConditionalRender from "./quartz/components/ConditionalRender"
import ContentMeta from "./quartz/components/ContentMeta"
import DesktopOnly from "./quartz/components/DesktopOnly"
import Explorer from "./quartz/components/Explorer"
import Flex from "./quartz/components/Flex"
import Footer from "./quartz/components/Footer"
import Graph from "./quartz/components/Graph"
import Head from "./quartz/components/Head"
import MobileOnly from "./quartz/components/MobileOnly"
import PageTitle from "./quartz/components/PageTitle"
import ReaderMode from "./quartz/components/ReaderMode"
import Search from "./quartz/components/Search"
import Spacer from "./quartz/components/Spacer"
import TagList from "./quartz/components/TagList"
import TableOfContents from "./quartz/components/TableOfContents"
import ViewOriginalLink from "./quartz/components/ViewOriginalLink"

const leftSidebarComponents = [
  PageTitle(),
  MobileOnly(Spacer()),
  Flex({
    components: [
      {
        Component: Search(),
        grow: true,
      },
      {
        Component: ReaderMode(),
      },
    ],
    direction: "row",
    gap: "1rem",
  }),
  Explorer(),
]

const rightSidebarComponents = [Graph(), DesktopOnly(TableOfContents()), Backlinks()]

const breadcrumbs = ConditionalRender({
  component: Breadcrumbs(),
  condition: (props) => props.fileData.slug !== "index",
})

const sourceLink = ConditionalRender({
  component: ViewOriginalLink(),
  condition: (props) => (props.fileData.slug ?? "").startsWith("Sources/"),
})

export const sharedPageComponents: SharedLayout = {
  head: Head(),
  header: [],
  footer: Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
  afterBody: [],
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [breadcrumbs, ArticleTitle(), ContentMeta(), TagList(), sourceLink],
  left: leftSidebarComponents,
  right: rightSidebarComponents,
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Breadcrumbs(), ArticleTitle(), ContentMeta()],
  left: leftSidebarComponents,
  right: [],
}

