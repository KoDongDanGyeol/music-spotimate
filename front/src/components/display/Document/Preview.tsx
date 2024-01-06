"use client"

import styled from "styled-components"
import { DocumentLayout } from "@/components/display/Document"

export interface DocumentPreviewProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  layout?: DocumentLayout
}

const DocumentPreview = (props: DocumentPreviewProps) => {
  const { layout = DocumentLayout.Overview, className = "", children, ...restProps } = props

  return (
    <DocumentPreviewContainer className={`${className} ${layout}`} {...restProps}>
      {children}
    </DocumentPreviewContainer>
  )
}

const DocumentPreviewContainer = styled.div`
  margin-top: 12px;
  &.overview {
  }
  &.example {
    padding: 16px;
    border: 1px solid hsl(var(--color-gray300));
  }
  &.table {
    font-size: ${(props) => props.theme.typo.size.sm};
    line-height: ${(props) => props.theme.typo.leading.sm};
    tbody {
      border-top: 1px solid hsl(var(--color-gray400));
    }
    tbody tr:nth-child(odd) {
      background-color: hsla(var(--color-gray200), 90%);
    }
    thead th,
    tbody th {
      font-weight: 700;
    }
    thead th,
    thead td,
    tbody th,
    tbody td {
      padding: 12px;
    }
  }
`

export default DocumentPreview
