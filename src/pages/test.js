import React from "react"
import { Box } from "@chakra-ui/core"

const Test = () => {
  return (
    <>
      <Box h={10} w={10}>
        <a href="/">
          <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Box>
    </>
  )
}

export default Test
