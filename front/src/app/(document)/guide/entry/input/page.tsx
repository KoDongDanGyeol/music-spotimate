"use client"

import { useForm } from "react-hook-form"
import styled from "styled-components"
import Document from "@/components/display/Document"
import Helper from "@/components/entry/Helper"
import Input from "@/components/entry/Input"

interface ExampleTypeA {
  email: string
}

const Page = () => {
  const example01 = useForm<ExampleTypeA>({
    defaultValues: {
      email: "",
    },
  })
  const example02 = useForm<ExampleTypeA>({
    defaultValues: {
      email: "",
    },
  })
  const example03 = useForm<ExampleTypeA>({
    defaultValues: {
      email: "Disabled Value",
    },
  })
  const example04 = useForm<ExampleTypeA>({
    mode: "all",
    defaultValues: {
      email: "",
    },
  })

  return (
    <>
      <Document layout="overview">
        <Document.Headline>Input</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Text</Document.Headline>
        <Document.Preview>
          <InputExample>
            <Input<ExampleTypeA>
              control={example01.control}
              name="email"
              type="email"
              placeholder="Placeholder"
              onChange={(event) => console.log("onChange" + event.target.value)}
              onBlur={() => console.log("onBlur")}
            />
          </InputExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Disabled</Document.Headline>
        <Document.Preview>
          <InputExample>
            <Input<ExampleTypeA>
              control={example02.control}
              name="email"
              type="email"
              placeholder="Placeholder"
              disabled
            />
          </InputExample>
        </Document.Preview>
        <Document.Preview>
          <InputExample>
            <Input<ExampleTypeA>
              control={example03.control}
              name="email"
              type="email"
              placeholder="Placeholder"
              disabled
            />
          </InputExample>
        </Document.Preview>
      </Document>

      <Document layout="example">
        <Document.Headline>Rules</Document.Headline>
        <Document.Preview>
          <InputExample>
            <Input<ExampleTypeA>
              control={example04.control}
              name="email"
              rules={{
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 주소를 정확하게 입력해 주세요",
                },
              }}
              type="email"
              placeholder="Placeholder"
            />
            <Helper variants="default">Helper Text</Helper>
            <Helper variants="error">{example04.formState.errors?.email?.message}</Helper>
          </InputExample>
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
                <th scope="row">rules</th>
                <td>Optional</td>
                <td>{`RegisterOptions<T>`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">type</th>
                <td>Optional</td>
                <td>HTMLInputTypeAttribute</td>
                <td>-</td>
                <td>text</td>
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

const InputExample = styled.div`
  /*  */
`

export default Page
