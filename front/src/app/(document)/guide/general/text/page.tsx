"use client"

import { Fragment } from "react"
import styled from "styled-components"
import { ObjectEntries } from "@/libs/utils"
import Document from "@/components/display/Document"
import Text, { TextSize } from "@/components/general/Text"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Text</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Size</Document.Headline>
        <Document.Preview>
          <TextExample>
            {(Object.entries(TextSize) as ObjectEntries<typeof TextSize>).map(([sizeKey, sizeValue]) => (
              <Fragment key={sizeKey}>
                <Text size={sizeValue}>Lorem ipsum</Text>
              </Fragment>
            ))}
          </TextExample>
        </Document.Preview>
      </Document>

      <Document layout="table">
        <Document.Headline>Property</Document.Headline>
        <Document.Preview>
          <table>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "16%" }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: "16%" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Necessity</th>
                <th scope="col">Type</th>
                <th scope="col">Option</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">as</th>
                <td>Optional</td>
                <td>React.ElementType</td>
                <td>-</td>
                <td>p</td>
              </tr>
              <tr>
                <th scope="row">size</th>
                <td>Optional</td>
                <td>TextSize</td>
                <td>{Object.values(TextSize).join(", ")}</td>
                <td>{TextSize.BASE}</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>
    </>
  )
}

const TextExample = styled.div`
  /*  */
`

export default Page
