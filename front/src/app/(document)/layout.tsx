"use client"

import { usePathname } from "next/navigation"
import styled from "styled-components"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Breadcrumb from "@/components/display/Breadcrumb"
import Path from "@/components/display/Path"

interface LayoutProps extends React.PropsWithChildren {
  //
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  const pathname = usePathname()

  return (
    <AppContainer>
      <AppHeader routeSegment="document">
        <AppPath activePathname={pathname} childOnly={false} pathname={`/guide`} />
      </AppHeader>
      <PageContainer>
        <PageContent>
          <PageBreadcrumb pathname={pathname} />
          {children}
          <PagePath childOnly={true} pathname={pathname} />
        </PageContent>
        <AppFooter />
      </PageContainer>
    </AppContainer>
  )
}

const PageBreadcrumb = styled(Breadcrumb)`
  /*  */
`

const PagePath = styled(Path)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  a {
    font-size: ${(props) => props.theme.typo.size.sm};
    line-height: ${(props) => props.theme.typo.leading.normal};
  }
`

const PageContent = styled.article`
  flex-grow: 1;
  ${PageBreadcrumb} {
    /*  */
  }
  ${PagePath} {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid hsl(var(--color-gray300));
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 0;
`

const AppPath = styled(Path)`
  /*  */
`

const AppHeader = styled(Header)`
  /*  */
`

const AppFooter = styled(Footer)`
  /*  */
`

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  ${AppHeader} {
    /*  */
  }
  ${AppFooter} {
    /*  */
  }
  ${PageContainer} {
    padding-left: 240px;
  }
  ${PageContent} {
    padding: 24px 32px;
  }
  @media ${(props) => props.theme.screen.device.md} {
    ${AppHeader} {
      /*  */
    }
    ${AppFooter} {
      /*  */
    }
    ${PageContainer} {
      padding-top: 64px;
      padding-left: 0;
    }
    ${PageContent} {
      padding: 24px 16px;
    }
  }
`

export default Layout
