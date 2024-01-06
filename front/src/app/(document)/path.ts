export type PathItem = {
  name: string
  leaf?: PathItem[]
}

export const Path: PathItem[] = [
  {
    name: "guide",
    leaf: [{ name: "general", leaf: [{ name: "color" }, { name: "text" }, { name: "button" }] }],
  },
]
