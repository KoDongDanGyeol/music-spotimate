"use client"

import styled from "styled-components"
import Document from "@/components/display/Document"
import Picture from "@/components/display/Picture"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Picture</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Ratio</Document.Headline>
        <Document.Preview>
          <PictureExample>
            <Picture alt="" src={`https://source.unsplash.com/random/?user&1`} priority={true} />
            <Picture alt="" ratio={[1, 1]} src={`https://source.unsplash.com/random/?user&2`} priority={true} />
          </PictureExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Fallback</Document.Headline>
        <Document.Preview>
          <PictureExample>
            <Picture alt="" src={``} priority={true} />
            <Picture alt="" src={`/error.jpg`} priority={true} />
            <Picture alt="" ratio={[1, 1]} src={`/error.jpg`} priority={true} />
          </PictureExample>
        </Document.Preview>
        <Document.Preview>
          <PictureExample>
            <Picture alt="" src={``} priority={true} text="ABC" />
            <Picture alt="" src={`/error.jpg`} priority={true} text="ABC" />
            <Picture alt="" ratio={[1, 1]} src={`/error.jpg`} priority={true} text="ABC" />
          </PictureExample>
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
                <th scope="row">alt</th>
                <td>Required</td>
                <td>string</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">icon</th>
                <td>Optional</td>
                <td>keyof typeof IconName</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">ratio</th>
                <td>Optional</td>
                <td>[number, number]</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">src</th>
                <td>Required</td>
                <td>string</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">text</th>
                <td>Optional</td>
                <td>string</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>
    </>
  )
}

const PictureExample = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  .picture {
    width: 100px;
  }
`

export default Page
