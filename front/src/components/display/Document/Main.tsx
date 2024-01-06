"use client"

import { Children, cloneElement, isValidElement } from "react"
import styled from "styled-components"
import Document, { DocumentLayout } from "@/components/display/Document"

export interface DocumentMainProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  layout: DocumentLayout
}

const DocumentMain = (props: DocumentMainProps) => {
  const { layout, className = "", children, ...restProps } = props
  const childProps = { layout }

  return (
    <DocumentMainContainer className={`${className}`} {...restProps}>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === Document.Headline) return cloneElement(child, childProps)
        if (isValidElement(child) && child.type === Document.Preview) return cloneElement(child, childProps)
        return children
      })}
    </DocumentMainContainer>
  )
}

const DocumentMainContainer = styled.section`
  margin-top: 24px;
`

export default DocumentMain
