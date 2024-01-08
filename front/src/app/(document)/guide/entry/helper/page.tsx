"use client"

import styled from "styled-components"
import { ObjectEntries } from "@/libs/utils"
import Document from "@/components/display/Document"
import Helper, { HelperVariants } from "@/components/entry/Helper"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Helper</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Variants</Document.Headline>
        <Document.Preview>
          <HelperExample>
            {(Object.entries(HelperVariants) as ObjectEntries<typeof HelperVariants>).map(
              ([variantsKey, variantsValue]) => (
                <Helper key={variantsKey} variants={variantsValue}>
                  {variantsKey}
                </Helper>
              ),
            )}
          </HelperExample>
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
                <th scope="row">variants</th>
                <td>Optional</td>
                <td>HelperVariants</td>
                <td>{Object.values(HelperVariants).join(", ")}</td>
                <td>{HelperVariants.Default}</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>
    </>
  )
}

const HelperExample = styled.div`
  /*  */
`

export default Page
