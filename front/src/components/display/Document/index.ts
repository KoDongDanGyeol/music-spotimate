import DocumentMain from "@/components/display/Document/Main"
import DocumentHeadline from "@/components/display/Document/Headline"
import DocumentPreview from "@/components/display/Document/Preview"

export const DocumentLayout = {
  Overview: "overview",
  Example: "example",
  Table: "table",
} as const

export type DocumentLayout = (typeof DocumentLayout)[keyof typeof DocumentLayout]

export default Object.assign(DocumentMain, {
  Headline: DocumentHeadline,
  Preview: DocumentPreview,
})
