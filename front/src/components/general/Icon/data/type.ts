export const IconName = {
  ["BarsBottomRight"]: "BarsBottomRight",
  ["XMark"]: "XMark",
} as const

export type IconName = (typeof IconName)[keyof typeof IconName]
