export type PathItem = {
  name: string
  leaf?: PathItem[]
}

export const Path: PathItem[] = [
  {
    name: "guide",
    leaf: [
      { name: "general", leaf: [{ name: "color" }, { name: "text" }, { name: "button" }] },
      {
        name: "entry",
        leaf: [{ name: "form-hoc" }, { name: "helper" }, { name: "input" }, { name: "label" }, { name: "textarea" }],
      },
      {
        name: "form",
        leaf: [{ name: "form-hoc-guide" }],
      },
    ],
  },
]
