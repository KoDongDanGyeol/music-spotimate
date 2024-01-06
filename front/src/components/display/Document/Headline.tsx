"use client"

import styled from "styled-components"
import { DocumentLayout } from "@/components/display/Document"
import Text from "@/components/general/Text"

export interface DocumentHeadlineProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  layout?: DocumentLayout
}

const DocumentHeadline = (props: DocumentHeadlineProps) => {
  const { layout = DocumentLayout.Overview, className = "", children, ...restProps } = props

  return (
    <DocumentHeadlineContainer className={`${className}`} {...restProps}>
      <Text
        as={layout === DocumentLayout.Overview ? "h2" : "h3"}
        size={layout === DocumentLayout.Overview ? "xl" : "lg"}
      >
        {children}
      </Text>
    </DocumentHeadlineContainer>
  )
}

const DocumentHeadlineContainer = styled.div`
  /*  */
`

export default DocumentHeadline
