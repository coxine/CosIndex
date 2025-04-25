export interface LinkItem {
  name: string
  desc?: string
  link: string
}

export interface LinkGroup {
  title: string
  desc: string
  items: LinkItem[]
}
