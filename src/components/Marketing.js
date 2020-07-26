import React from "react"
import { Link as ChakraLink, Text, Box } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Marketing = () => {
  return (
    <Box py={4} display={{ md: "flex" }}>
      <Box w={{ md: 40 }} flexShrink="0">
        <Plane />
      </Box>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          Marketing
        </Text>
        <ChakraLink
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          Finding customers for your new business
        </ChakraLink>
        <Text mt={2} color="gray.500">
          Getting a new business off the ground is a lot of hard work. Here are
          six ideas you can use to find your first customers.
        </Text>
      </Box>
    </Box>
  )
}

const Plane = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "plane.png" }) {
        childImageSharp {
          fluid(maxWidth: 767) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      imgStyle={{ borderRadius: ".5rem" }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}
