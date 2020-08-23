import React from "react"
import { Box, Flex } from "@chakra-ui/core"
import SmallHeader from "../components/small-header"
import Tree from "../images/tree-bg.jpg"
import Features from "../components/features"

const Services = () => {
  return (
    <>
      <SmallHeader />
      <Flex
        style={{
          backgroundImage: `url(${Tree}) `,
        }}
        mt="1.5rem"
        px="1rem"
        h="250px"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w="100%"
          color="black"
          maxW="1080px"
          fontSize={{ base: "3rem", md: "4.5rem" }}
          justifyContent="center"
          fontFamily="spinnaker
        "
        >
          SERVICES
        </Flex>
      </Flex>
      <Features />
    </>
  )
}

export default Services
