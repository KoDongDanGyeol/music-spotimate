"use client"

import "@/styles/error.css"

interface GlobalErrorProps {
  error: Error
}

const GlobalError = (props: GlobalErrorProps) => {
  const { error } = props

  console.error(error)

  return (
    <html>
      <body>
        <h1>Global Error</h1>
        <button onClick={() => window.location.reload()}>Reload page</button>
      </body>
    </html>
  )
}

export default GlobalError
