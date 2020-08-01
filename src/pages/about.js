import React from "react"
import Headers from "../components/headers"
import { Box } from "@chakra-ui/core"

const About = () => {
  return (
    <>
      <Headers />
      <Box as="h1" mt={8} px={{ base: "1rem", lg: "2rem" }}>
        About Page
      </Box>
    </>
  )
}

export default About
