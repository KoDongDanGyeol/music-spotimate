"use client"

import { Fragment } from "react"
import Link from "next/link"
import styled from "styled-components"
import { ObjectEntries } from "@/libs/utils"
import Document from "@/components/display/Document"
import Button, { ButtonEmphasis, ButtonShape, ButtonSize, ButtonVariants } from "@/components/general/Button"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Button</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Square Size</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            {(Object.entries(ButtonSize) as ObjectEntries<typeof ButtonSize>).map(([sizeKey, sizeValue]) => (
              <Fragment key={sizeKey}>
                <Button type="button" shape="square" size={sizeValue}>
                  Button {sizeKey}
                </Button>
              </Fragment>
            ))}
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Square Variants</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            {(Object.entries(ButtonVariants) as ObjectEntries<typeof ButtonVariants>).map(
              ([variantsKey, variantsValue]) => (
                <Fragment key={variantsKey}>
                  {(Object.entries(ButtonEmphasis) as ObjectEntries<typeof ButtonEmphasis>).map(
                    ([emphasisKey, emphasisValue]) => (
                      <Fragment key={variantsKey + emphasisKey}>
                        <Button type="button" shape="square" emphasis={emphasisValue} variants={variantsValue}>
                          {`${variantsKey} ${emphasisKey}`}
                        </Button>
                      </Fragment>
                    ),
                  )}
                </Fragment>
              ),
            )}
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Square Disabled</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            {(Object.entries(ButtonVariants) as ObjectEntries<typeof ButtonVariants>).map(
              ([variantsKey, variantsValue]) => (
                <Fragment key={variantsKey}>
                  {(Object.entries(ButtonEmphasis) as ObjectEntries<typeof ButtonEmphasis>).map(
                    ([emphasisKey, emphasisValue]) => (
                      <Fragment key={variantsKey + emphasisKey}>
                        <Button type="button" shape="square" emphasis={emphasisValue} variants={variantsValue} disabled>
                          {`${variantsKey} ${emphasisKey}`}
                        </Button>
                      </Fragment>
                    ),
                  )}
                </Fragment>
              ),
            )}
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Square Polymorphic</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            <Button as="button" type="button">
              As Button
            </Button>
            <Button as="a" href="/guide/components/navigation/button">
              As Anchor
            </Button>
            <Link href="/guide/components/navigation/button" passHref legacyBehavior>
              <Button as="a">As Link</Button>
            </Link>
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Plain Size</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            {(Object.entries(ButtonSize) as ObjectEntries<typeof ButtonSize>).map(([sizeKey, sizeValue]) => (
              <Fragment key={sizeKey}>
                <Button type="button" shape="plain" size={sizeValue}>{`Button ${sizeKey}`}</Button>
              </Fragment>
            ))}
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Plain Variants</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            {(Object.entries(ButtonVariants) as ObjectEntries<typeof ButtonVariants>).map(
              ([variantsKey, variantsValue]) => (
                <Fragment key={variantsKey}>
                  {(Object.entries(ButtonEmphasis) as ObjectEntries<typeof ButtonEmphasis>).map(
                    ([emphasisKey, emphasisValue]) => (
                      <Fragment key={variantsKey + emphasisKey}>
                        <Button type="button" shape="plain" emphasis={emphasisValue} variants={variantsValue}>
                          {`${variantsKey} ${emphasisKey}`}
                        </Button>
                      </Fragment>
                    ),
                  )}
                </Fragment>
              ),
            )}
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Plain Disabled</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            {(Object.entries(ButtonVariants) as ObjectEntries<typeof ButtonVariants>).map(
              ([variantsKey, variantsValue]) => (
                <Fragment key={variantsKey}>
                  {(Object.entries(ButtonEmphasis) as ObjectEntries<typeof ButtonEmphasis>).map(
                    ([emphasisKey, emphasisValue]) => (
                      <Fragment key={variantsKey + emphasisKey}>
                        <Button type="button" shape="plain" emphasis={emphasisValue} variants={variantsValue} disabled>
                          {`${variantsKey} ${emphasisKey}`}
                        </Button>
                      </Fragment>
                    ),
                  )}
                </Fragment>
              ),
            )}
          </ButtonExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Plain Polymorphic</Document.Headline>
        <Document.Preview>
          <ButtonExample>
            <Button as="button" type="button" shape="plain">
              As Button
            </Button>
            <Button as="a" href="/guide/components/navigation/button" shape="plain">
              As Anchor
            </Button>
            <Link href="/guide/components/navigation/button" passHref legacyBehavior>
              <Button as="a" shape="plain">
                As Link
              </Button>
            </Link>
          </ButtonExample>
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
                <td>button</td>
              </tr>
              <tr>
                <th scope="row">emphasis</th>
                <td>Optional</td>
                <td>ButtonEmphasis</td>
                <td>{Object.values(ButtonEmphasis).join(", ")}</td>
                <td>{ButtonEmphasis.Bold}</td>
              </tr>
              <tr>
                <th scope="row">shpae</th>
                <td>Optional</td>
                <td>ButtonShape</td>
                <td>{Object.values(ButtonShape).join(", ")}</td>
                <td>{ButtonShape.Square}</td>
              </tr>
              <tr>
                <th scope="row">size</th>
                <td>Optional</td>
                <td>ButtonSize</td>
                <td>{Object.values(ButtonSize).join(", ")}</td>
                <td>{ButtonSize.BASE}</td>
              </tr>
              <tr>
                <th scope="row">variants</th>
                <td>Optional</td>
                <td>ButtonVariants</td>
                <td>{Object.values(ButtonVariants).join(", ")}</td>
                <td>{ButtonVariants.Primary}</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>
    </>
  )
}

const ButtonExample = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`

export default Page
