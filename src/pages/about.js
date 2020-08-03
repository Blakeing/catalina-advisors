import React from "react"
import Headers from "../components/headers"
import { Box, Flex } from "@chakra-ui/core"
import Typing from "../images/fa-contact.jpg"

const About = () => {
  return (
    <>
      <Headers />
      <Flex
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,19,46,0.6) 0%,rgba(0,19,46,0.6) 50%), url(${Typing}) `,
        }}
        mt="1.5rem"
        px="1rem"
        h="250px"
        w="100%"
        alignItems="center"
      >
        <Box
          w="100%"
          color="white"
          fontWeight="600"
          maxW="1080px"
          mx="auto"
          fontSize={{ base: "3rem", md: "6rem" }}
        >
          About
        </Box>
      </Flex>
    </>
  )
}

export default About
