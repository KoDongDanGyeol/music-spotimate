"use client"

import "@/styles/error.css"

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error = (props: ErrorProps) => {
  const { error, reset } = props

  console.error(error)

  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error
