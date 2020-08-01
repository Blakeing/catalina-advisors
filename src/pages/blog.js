import React from "react"
import { Box } from "@chakra-ui/core"
import Headers from "../components/headers"

const Blog = () => {
  return (
    <>
      <Headers />
      <Box as="h1" mt={8} px={{ base: "1rem", lg: "2rem" }}>
        Blog Page
      </Box>
    </>
  )
}

export default Blog
