"use client"

import styled from "styled-components"
import { ObjectEntries } from "@/libs/utils"
import Document from "@/components/display/Document"
import Avatar, { AvatarShape, AvatarSize } from "@/components/display/Avatar"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Avatar</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Circle Size</Document.Headline>
        <Document.Preview>
          <AvatarExample>
            {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue], index) => (
              <Avatar
                key={sizeKey}
                size={sizeValue}
                shape="circle"
                picture={{
                  src: `https://source.unsplash.com/random/?user&${index}`,
                }}
              />
            ))}
          </AvatarExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Circle Fallback</Document.Headline>
        <Document.Preview>
          <AvatarExample>
            {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue]) => (
              <Avatar
                key={sizeKey}
                size={sizeValue}
                shape="circle"
                picture={{
                  src: ``,
                }}
              />
            ))}
          </AvatarExample>
        </Document.Preview>
        <Document.Preview>
          <AvatarExample>
            {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue]) => (
              <Avatar
                key={sizeKey}
                size={sizeValue}
                shape="circle"
                picture={{
                  src: ``,
                  text: `ABC`,
                }}
              />
            ))}
          </AvatarExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Square Size</Document.Headline>
        <Document.Preview>
          <AvatarExample>
            {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue], index) => (
              <Avatar
                key={sizeKey}
                size={sizeValue}
                shape="square"
                picture={{
                  src: `https://source.unsplash.com/random/?user&${index}`,
                }}
              />
            ))}
          </AvatarExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Square Fallback</Document.Headline>
        <Document.Preview>
          <AvatarExample>
            {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue]) => (
              <Avatar
                key={sizeKey}
                size={sizeValue}
                shape="square"
                picture={{
                  src: ``,
                }}
              />
            ))}
          </AvatarExample>
        </Document.Preview>
        <Document.Preview>
          <AvatarExample>
            {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue]) => (
              <Avatar
                key={sizeKey}
                size={sizeValue}
                shape="square"
                picture={{
                  src: ``,
                  text: `ABC`,
                }}
              />
            ))}
          </AvatarExample>
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
                <th scope="row">shape</th>
                <td>Optional</td>
                <td>AvatarShape</td>
                <td>{Object.values(AvatarShape).join(", ")}</td>
                <td>{AvatarShape.Circle}</td>
              </tr>
              <tr>
                <th scope="row">size</th>
                <td>Optional</td>
                <td>AvatarSize</td>
                <td>{Object.values(AvatarSize).join(", ")}</td>
                <td>{AvatarSize.BASE}</td>
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

      <Document layout="overview">
        <Document.Headline>Avatar Group</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Max Count</Document.Headline>
        <Document.Preview>
          {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue]) => (
            <AvatarGroupExample key={sizeKey}>
              <Avatar.Group>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
                  <li key={index}>
                    <Avatar
                      shape="circle"
                      size={sizeValue}
                      name={`Lorem Ipsum`}
                      picture={{
                        src: `https://source.unsplash.com/random/?user&${index}`,
                      }}
                    />
                  </li>
                ))}
              </Avatar.Group>
            </AvatarGroupExample>
          ))}
        </Document.Preview>
      </Document>

      <Document layout="overview">
        <Document.Headline>Avatar Stack</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Max Count</Document.Headline>
        <Document.Preview>
          {(Object.entries(AvatarSize) as ObjectEntries<typeof AvatarSize>).map(([sizeKey, sizeValue]) => (
            <AvatarStackExample key={sizeKey}>
              <Avatar.Stack maxCount={3}>
                {Array.from({ length: 4 }, (_, i) => i + 1).map((index) => (
                  <Avatar
                    key={index}
                    shape="circle"
                    size={sizeValue}
                    picture={{
                      src: `https://source.unsplash.com/random/?user&${index}`,
                    }}
                  />
                ))}
              </Avatar.Stack>
            </AvatarStackExample>
          ))}
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
                <th scope="row">maxCount</th>
                <td>Optional</td>
                <td>number</td>
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

const AvatarExample = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`

const AvatarGroupExample = styled.div`
  /*  */
`

const AvatarStackExample = styled.div`
  /*  */
`

export default Page
