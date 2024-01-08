"use client"

import styled from "styled-components"
import Text from "@/components/general/Text"

export interface FormHocGuideOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
  //
}

const FormHocGuideOverview = (prpos: FormHocGuideOverviewProps) => {
  const { className = "", ...restProps } = prpos

  return (
    <FormHocGuideOverviewContainer className={`${className}`} {...restProps}>
      <Text as="h2" size="base">
        FormHocGuide
      </Text>
      <Text as="p" size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
    </FormHocGuideOverviewContainer>
  )
}

const FormHocGuideOverviewContainer = styled.div`
  h2 + p {
    margin-top: 4px;
  }
`

export default FormHocGuideOverview
