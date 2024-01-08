"use client"

import { useForm } from "react-hook-form"
import styled from "styled-components"
import Document from "@/components/display/Document"
import Helper from "@/components/entry/Helper"
import Textarea from "@/components/entry/Textarea"

interface ExampleTypeA {
  text: string
}

const Page = () => {
  const example01 = useForm<ExampleTypeA>({
    defaultValues: {
      text: "",
    },
  })
  const example02 = useForm<ExampleTypeA>({
    defaultValues: {
      text: "",
    },
  })
  const example03 = useForm<ExampleTypeA>({
    defaultValues: {
      text: "Disabled Value",
    },
  })
  const example04 = useForm<ExampleTypeA>({
    defaultValues: {
      text: "",
    },
  })
  const example05 = useForm<ExampleTypeA>({
    mode: "all",
    defaultValues: {
      text: "",
    },
  })

  return (
    <>
      <Document layout="overview">
        <Document.Headline>Textarea</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Text</Document.Headline>
        <Document.Preview>
          <TextareaExample>
            <Textarea<ExampleTypeA>
              control={example01.control}
              name="text"
              placeholder="Placeholder"
              onChange={(event) => console.log("onChange" + event.target.value)}
              onBlur={() => console.log("onBlur")}
            />
          </TextareaExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Disabled</Document.Headline>
        <Document.Preview>
          <TextareaExample>
            <Textarea<ExampleTypeA> control={example02.control} name="text" placeholder="Placeholder" disabled />
          </TextareaExample>
        </Document.Preview>
        <Document.Preview>
          <TextareaExample>
            <Textarea<ExampleTypeA> control={example03.control} name="text" placeholder="Placeholder" disabled />
          </TextareaExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Auto Grow</Document.Headline>
        <Document.Preview>
          <TextareaExample>
            <Textarea<ExampleTypeA>
              control={example04.control}
              isAutoGrow={true}
              name="text"
              placeholder="Placeholder"
              rows={5}
            />
          </TextareaExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Rules</Document.Headline>
        <Document.Preview>
          <TextareaExample>
            <Textarea<ExampleTypeA>
              control={example05.control}
              name="text"
              rows={2}
              rules={{
                maxLength: {
                  value: 10,
                  message: "Max length 10",
                },
                minLength: {
                  value: 5,
                  message: "Min length 5",
                },
              }}
              placeholder="Placeholder"
            />
            <Helper variants="default">Helper Text</Helper>
            <Helper variants="error">{example05.formState.errors?.text?.message}</Helper>
          </TextareaExample>
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
                <th scope="row">autoComplete</th>
                <td>Optional</td>
                <td>on, off</td>
                <td>-</td>
                <td>off</td>
              </tr>
              <tr>
                <th scope="row">control</th>
                <td>Required</td>
                <td>{`Control<T>`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">disabled</th>
                <td>Optional</td>
                <td>boolean</td>
                <td>-</td>
                <td>false</td>
              </tr>
              <tr>
                <th scope="row">isAutoGrow</th>
                <td>Optional</td>
                <td>boolean</td>
                <td>-</td>
                <td>false</td>
              </tr>
              <tr>
                <th scope="row">name</th>
                <td>Required</td>
                <td>{`FieldPath<T>`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">placeholder</th>
                <td>Optional</td>
                <td>string</td>
                <td>-</td>
                <td>{`""`}</td>
              </tr>
              <tr>
                <th scope="row">rows</th>
                <td>Optional</td>
                <td>number</td>
                <td>-</td>
                <td>2</td>
              </tr>
              <tr>
                <th scope="row">rules</th>
                <td>Optional</td>
                <td>{`RegisterOptions<T>`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">onBlur</th>
                <td>Optional</td>
                <td>{`() => void`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">onChange</th>
                <td>Optional</td>
                <td>{`(event: ChangeEvent) => void`}</td>
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

const TextareaExample = styled.div`
  /*  */
`

export default Page
