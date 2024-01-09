export const IconName = {
  ["BarsBottomRight"]: "BarsBottomRight",
  ["ChatBubbleOvalLeftEllipsis"]: "ChatBubbleOvalLeftEllipsis",
  ["Photo"]: "Photo",
  ["UserCircle"]: "UserCircle",
  ["XMark"]: "XMark",
} as const

export type IconName = (typeof IconName)[keyof typeof IconName]
