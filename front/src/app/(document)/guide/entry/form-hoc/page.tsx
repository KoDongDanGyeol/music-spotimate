"use client"

import { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { ObjectEntries } from "@/libs/utils"
import Document from "@/components/display/Document"
import { FormHocLayout } from "@/components/entry/FormHoc"
import FormHocGuide, { FormHocGuideTypes } from "@/components/form/FormHocGuide"
import Button from "@/components/general/Button"

const Page = () => {
  const [layout, setLayout] = useState<FormHocLayout>(() => FormHocLayout.Default)

  const example01 = useForm<FormHocGuideTypes>({
    defaultValues: {
      title: "",
    },
  })

  return (
    <>
      <Document layout="overview">
        <Document.Headline>Form Hoc</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Layout</Document.Headline>
        <Document.Preview>
          <FormHocGuideExample>
            <FormHocSwitch>
              <ul>
                {(Object.entries(FormHocLayout) as ObjectEntries<typeof FormHocLayout>).map(([name, value]) => (
                  <li key={name}>
                    <Button
                      type="button"
                      emphasis={value === layout ? "subtle" : "minimal"}
                      shape="square"
                      variants="secondary"
                      onClick={() => setLayout(() => FormHocLayout[name])}
                    >
                      {name}
                    </Button>
                  </li>
                ))}
              </ul>
            </FormHocSwitch>
            <FormHocGuideView
              formAction={{
                submit: "Submit",
              }}
              formData={example01}
              formLayout={layout}
              formOverview={<FormHocGuide.Overview />}
              formPlaceholder={{
                title: "Title Placeholder",
                description: "Description Placeholder",
              }}
              handleValid={(data) => console.log(data)}
            />
          </FormHocGuideExample>
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
                <th scope="row">formAction</th>
                <td>Optional</td>
                <td>&#123; reset?: string; submit?: string &#125;</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">formData</th>
                <td>Required</td>
                <td>{`UseFormReturn<T>`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">formLayout</th>
                <td>Optional</td>
                <td>FormHocLayout</td>
                <td>{Object.values(FormHocLayout).join(", ")}</td>
                <td>{FormHocLayout.Default}</td>
              </tr>
              <tr>
                <th scope="row">formOverview</th>
                <td>Optional</td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">formPlaceholder</th>
                <td>Optional</td>
                <td>
                  {`
                    [key in keyof T]?: T[key] extends object
                      ? { [subKey in keyof T[key]]?: string }
                      : T[key] extends Array<object>
                        ? { [subKey in keyof T[key][number]]?: string }
                        : string
                  `}
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">isLoading</th>
                <td>Optional</td>
                <td>boolean</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">isSuccess</th>
                <td>Optional</td>
                <td>boolean</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">handleValid</th>
                <td>Required</td>
                <td>{`SubmitHandler<T>`}</td>
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

const FormHocSwitch = styled.div`
  ul {
    display: flex;
    gap: 8px;
  }
`

const FormHocGuideView = styled(FormHocGuide)`
  /*  */
`

const FormHocGuideExample = styled.div`
  ${FormHocGuideView} {
    margin-top: 12px;
  }
`

export default Page
