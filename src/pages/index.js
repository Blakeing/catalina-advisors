import React, { useContext } from "react"
import SEO from "../components/seo"
import planes from "../images/cut-plane.png"
import { ChakraDrawer } from "../components/ChakraDrawer"

import { Box, Flex, useDisclosure, Button, Image } from "@chakra-ui/core"
import { Link } from "gatsby"
import Headers from "../components/headers"
import { ScreenContext } from "../../screen-context"
import ClientOnly from "../utils/ClientOnly"

function IndexPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const msg = useContext(ScreenContext)

  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Test"
      />
      <ClientOnly>
        <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
        <Box
          style={{
            backgroundColor: "#000000",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' stroke-opacity='.5' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          h={msg.height}
          pos="relative"
          overflow="hidden"
          bg="transparent"
        >
          <Image
            height={{ base: "auto" }}
            pos="absolute"
            bottom={{ base: "-2rem", md: "-6rem", lg: "-7rem", xl: "-9rem" }}
            right={{ base: "-3rem", md: "0", lg: "-13rem", xl: "-26rem" }}
            zIndex={1}
            src={planes}
          />

          <Box mx="auto" maxW="1500px" zIndex={2}>
            <Headers />
            <Flex
              h={{
                base: `calc(${msg.height}px - 96px)`,
                md: `calc(${msg.height}px - 117px)`,
              }}
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
                  fontWeight="600"
                  lineHeight={{ base: "2.5rem", sm: 1 }}
                  fontSize={{ base: "2.25rem", sm: "3rem", md: "4rem" }}
                >
                  Experienced Corporate
                  <br />
                  <span className="text-gray-700">Finance Advisors</span>
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
      </ClientOnly>
    </>
  )
}

export default IndexPage
