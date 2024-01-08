"use client"

import { Fragment } from "react"
import styled from "styled-components"
import { ObjectEntries } from "@/libs/utils"
import Document from "@/components/display/Document"
import Label, { LabelNecessity, LabelSize } from "@/components/entry/Label"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Label</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Necessity</Document.Headline>
        <Document.Preview>
          <LabelExample>
            {(Object.entries(LabelNecessity) as ObjectEntries<typeof LabelNecessity>).map(
              ([necessityKey, necessityValue]) => (
                <Fragment key={necessityKey}>
                  <Label htmlFor="label" isRequired={false} necessity={necessityValue}>
                    Label
                  </Label>
                  <Label htmlFor="label" isRequired={true} necessity={necessityValue}>
                    Label
                  </Label>
                </Fragment>
              ),
            )}
          </LabelExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Necessity</Document.Headline>
        <Document.Preview>
          <LabelExample>
            {(Object.entries(LabelSize) as ObjectEntries<typeof LabelSize>).map(([sizeKey, sizeValue]) => (
              <Fragment key={sizeKey}>
                <Label htmlFor="label" size={sizeValue}>
                  Label
                </Label>
              </Fragment>
            ))}
          </LabelExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Polymorphic</Document.Headline>
        <Document.Preview>
          <LabelExample>
            <Label htmlFor="label">as label</Label>
            <Label as="span">as span</Label>
          </LabelExample>
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
                <td>label</td>
              </tr>
              <tr>
                <th scope="row">isRequired</th>
                <td>Optional</td>
                <td>boolean</td>
                <td>-</td>
                <td>false</td>
              </tr>
              <tr>
                <th scope="row">necessity</th>
                <td>Optional</td>
                <td>LabelNecessity</td>
                <td>{Object.values(LabelNecessity).join(", ")}</td>
                <td>{LabelNecessity.Icon}</td>
              </tr>
              <tr>
                <th scope="row">size</th>
                <td>Optional</td>
                <td>LabelSize</td>
                <td>{Object.values(LabelSize).join(", ")}</td>
                <td>{LabelSize.SM}</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>
    </>
  )
}

const LabelExample = styled.div`
  /*  */
`

export default Page
