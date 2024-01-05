"use client"

import styled from "styled-components"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

interface LayoutProps extends React.PropsWithChildren {
  //
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <AppContainer>
      <AppHeader routeSegment="document">
        <>menu...</>
      </AppHeader>
      <PageContainer>
        <PageContent>{children}</PageContent>
        <AppFooter />
      </PageContainer>
    </AppContainer>
  )
}

const PageContent = styled.article`
  flex-grow: 1;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 0;
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
