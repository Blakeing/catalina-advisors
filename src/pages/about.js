import React from "react"
import Headers from "../components/headers"
import { Box, Flex, Image } from "@chakra-ui/core"
import Typing from "../images/fa-contact.jpg"
import Shape from "../images/fa-about-shape.png"
import One from "../images/fa-about-1.jpg"

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
      <Box
        as="section"
        style={{
          backgroundImage: `url(${Shape})`,
          backgroundSize: "initial",
          backgroundPosition: "top center",
          minHeight: "550px",
        }}
        mx="auto"
        py="3rem"
        px="1rem"
      >
        <Box py="1.5rem" maxW="1080px" mx="auto">
          <Box
            lineHeight="1em"
            py="1.5rem"
            fontWeight="900"
            fontSize={{ base: "2rem", md: "3rem" }}
            w={{ base: "100%", md: "80%" }}
            as="h2"
          >
            Curabitur non nulla sit amet nisl tempus convallis. Diam sit amet
            quam vehicula elementum amet dui.
          </Box>
        </Box>
        <Flex pb="10px" flexWrap="wrap" maxW="1080px" mx="auto" as="p">
          <Box pb="" w={{ base: "100%", md: "50%" }}>
            Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis
            lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            Quisque velit nisi, preti
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras
            ultricies ligula sed magna dictum porta. Elementum sed sit amet dui.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia.
          </Box>
        </Flex>
      </Box>
      <Flex
        mt={{ base: "0", lg: "-145px" }}
        flexWrap="wrap"
        maxW="1080px"
        mx="auto"
      >
        <Box py="1.75rem" mr="-5.5%" w={{ base: "100%", lg: "47.25%" }}>
          <Image src={One} />
        </Box>
        <Box py="1.75rem" w={{ base: "100%", lg: "47.25%" }}>
          <Box
            py={{ base: "1rem", lg: "7rem" }}
            px={{ base: "2rem", lg: "4rem" }}
            mt={{ base: "0", lg: "2rem" }}
            bg="teal.500"
          >
            <Box
              as="h2"
              pb="1.75rem"
              fontSize="3rem"
              lineHeight="1"
              fontWeight="900"
            >
              Our Approach
            </Box>
            <ul>
              <li style={{ paddingBottom: "1rem" }}>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Curabitur aliquet quam id dui posuere blandit. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi.
              </li>
              <li style={{ paddingBottom: "1rem" }}>
                Donec sollicitudin molestie malesuada. Sed porttitor lectus
                nibh. Sed porttitor lectus nibh. Proin eget tortor risus.
              </li>
              <li style={{ paddingBottom: "1rem" }}>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vivamus magna justo, lacinia eget consectetur sed,
                convallis at tellus. Vivamus suscipit tortor eget felis
                porttitor volutpat.
              </li>
              <li style={{ paddingBottom: "1rem" }}>
                Vivamus suscipit tortor eget felis porttitor volutpat.Praesent
                sapien massa, convallis a pellentesque nec, egestas non nisi.
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus.
              </li>
            </ul>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default About
