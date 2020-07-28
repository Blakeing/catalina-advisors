import React from "react"
import SEO from "../components/seo"
import planes from "../images/planes.png"
import { ChakraDrawer } from "../components/ChakraDrawer"

import { Box, Flex, useDisclosure, Button, Image } from "@chakra-ui/core"
import { Link } from "gatsby"
import Headers from "../components/headers"

function IndexPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Test"
      />
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Box pos="relative" h="100vh" overflow="hidden" bg="transparent">
        <Image
          pos="absolute"
          bottom={{ base: "-2rem", md: "-6rem", lg: "-7rem", xl: "-15rem" }}
          right={{ base: "-3rem", md: "0", lg: "-13rem", xl: "-4rem" }}
          zIndex={1}
          src={planes}
        />

        <Box mx="auto" maxW="1280px" zIndex={2}>
          <Headers />
          <Flex
            h="calc(100% - 8.5rem)"
            mx="auto"
            px={{ base: 4, lg: 8 }}
            maxW="1280px"
            alignItems="center"
            position="absolute"
            zIndex={2}
          >
            <Box textAlign="left" className="sm:text-center lg:text-left">
              <Box
                as="h2"
                lineHeight={{ base: "2.5rem", sm: 1 }}
                letterSpacing="-.025em"
                fontSize={{ base: "2.25rem", sm: "3rem", md: "4rem" }}
              >
                Experienced Corporate
                <br />
                <span className="text-gray-700">Financial Advisors</span>
              </Box>
              <Box
                as="p"
                mt={{ base: 3, md: 5 }}
                //mx={{ sm: "auto", lg: 0 }}
                mx="0"
                maxW={{ base: "100%", lg: "50%" }}
                fontSize={{ base: "1rem", sm: "1.125rem", md: "1.25rem" }}
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </Box>
              <Button
                mt={{ base: 5, md: 8 }}
                d="inline-flex"
                justify="center"
                alignItems="center"
                variantColor="teal"
                href="/"
              >
                <Link to="/contact">Learn More</Link>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default IndexPage
