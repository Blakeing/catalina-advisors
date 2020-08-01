import React from "react"
import { Box } from "@chakra-ui/core"
import Headers from "../components/headers"

const Services = () => {
  return (
    <>
      <Headers />
      <Box as="h1" mt={8} px={{ base: "1rem", lg: "2rem" }}>
        Services Page
      </Box>
    </>
  )
}

export default Services
