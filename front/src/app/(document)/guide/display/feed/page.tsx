"use client"

import Link from "next/link"
import styled from "styled-components"
import Document from "@/components/display/Document"
import Feed from "@/components/display/Feed"

const Page = () => {
  return (
    <>
      <Document layout="overview">
        <Document.Headline>Feed</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Example</Document.Headline>
        <Document.Preview>
          <FeedExample>
            <Feed>
              <Feed.Profile
                name={<Link href="">{`Lorem ipsum`}</Link>}
                date={`2023-12-25 PM15:00`}
                picture={{
                  src: `https://source.unsplash.com/random/?user&${0}`,
                  text: `Lorem ipsum`.slice(0, 2),
                }}
                isFollowed={false}
              >
                {/*  */}
              </Feed.Profile>
              <Feed.Body
                lineClamp={3}
                extra={{ count: { comment: 0 } }}
                more={{ href: `/feed/1` }}
                hashtag={{ href: { prefix: `/search?` } }}
              >
                {`#Lorem #ipsum dolor sit amet consectetur adipisicing elit.\n\nhttp://localhost:3000/guide/display/feed#123`}
              </Feed.Body>
            </Feed>
          </FeedExample>
        </Document.Preview>
      </Document>

      <Document layout="table">
        <Document.Headline>Profile Property</Document.Headline>
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
                <th scope="row">picture</th>
                <td>Required</td>
                <td>{`Pick<PictureMainProps, "src" | "text">`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">name</th>
                <td>Required</td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">date</th>
                <td>Required</td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">isFollowed</th>
                <td>Required</td>
                <td>boolean</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>

      <Document layout="table">
        <Document.Headline>Body Property</Document.Headline>
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
                <th scope="row">lineClamp</th>
                <td>Optional</td>
                <td>number</td>
                <td>-</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">more</th>
                <td>Optional</td>
                <td>{`{ href?: string }`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">hashtag</th>
                <td>Optional</td>
                <td>{`{ href?: { prefix?: string } }`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">extra</th>
                <td>Optional</td>
                <td>{`{ count?: { comment?: number } }`}</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </Document.Preview>
      </Document>

      <Document layout="overview">
        <Document.Headline>Feed Group</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Example</Document.Headline>
        <Document.Preview>
          <FeedExample>
            <Feed.Group>
              {Array.from({ length: 4 }, (_, i) => i + 1).map((index) => (
                <li key={index}>
                  <Feed>
                    <Feed.Profile
                      name={<Link href="">{`Lorem ipsum`}</Link>}
                      date={`2023-12-25 PM15:00`}
                      picture={{
                        src: `https://source.unsplash.com/random/?user&${0}`,
                        text: `Lorem ipsum`.slice(0, 2),
                      }}
                      isFollowed={index % 2 === 0}
                    >
                      {/*  */}
                    </Feed.Profile>
                    <Feed.Body
                      lineClamp={3}
                      extra={{ count: { comment: index * 250 } }}
                      more={{ href: `/feed/1` }}
                      hashtag={{ href: { prefix: `/search?` } }}
                    >
                      {`#Lorem #ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptatum ad unde asperiores eveniet odio voluptate reiciendis eum quod doloribus exercitationem quisquam, facere veritatis possimus cum! Tempora reiciendis quas repudiandae.`}
                    </Feed.Body>
                  </Feed>
                </li>
              ))}
            </Feed.Group>
          </FeedExample>
        </Document.Preview>
      </Document>
    </>
  )
}

const FeedExample = styled.div`
  /*  */
`

export default Page
