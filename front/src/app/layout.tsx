import type { Metadata } from "next"
import RecoilProvider from "@/components/config/RecoilProvider"
import StyledProvider from "@/components/config/StyledProvider"
import LayoutProvider from "@/components/config/LayoutProvider"
import notoSansKr from "@/styles/font/notoSansKr"
import "@/styles/reset.css"

export const metadata: Metadata = {
  title: {
    default: "Spotimate",
    template: "%s | Spotimate",
  },
  description: "Spotimate",
  keywords: "Spotimate",
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps extends React.PropsWithChildren {
  //
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang="ko" className={notoSansKr.variable} suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{
              const stored = localStorage.getItem("spotimate_atomTheme");
              const initial = stored ? stored : typeof window !== "undefined" && window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
              document?.documentElement?.setAttribute("data-theme", initial);
            })()`,
          }}
        />
      </head>
      <body>
        <RecoilProvider flag={false}>
          <StyledProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </StyledProvider>
        </RecoilProvider>
      </body>
    </html>
  )
}

export default RootLayout
