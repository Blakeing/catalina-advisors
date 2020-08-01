import React from "react"
import { Box } from "@chakra-ui/core"
import Headers from "../components/headers"

const Contact = () => {
  return (
    <>
      <Headers />
      <Box as="h1" mt={8} px={{ base: "1rem", lg: "2rem" }}>
        Contact Page
      </Box>
    </>
  )
}

export default Contact
