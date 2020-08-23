import React from "react"
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/core"
import { ChakraDrawer } from "../components/ChakraDrawer"
import { Link } from "gatsby"

const SmallHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Box pt="6" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Flex
            alignItems="center"
            flexGrow={{ base: 1, lg: 0 }}
            flexShrink="0"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              w={{ base: "100%", md: "auto" }}
            >
              <Flex>
                <Box>
                  <Box
                    as="h1"
                    lineHeight="1"
                    textTransform="capitalize"
                    href="#"
                    aria-label="Home"
                    fontSize={{ base: "3rem" }}
                    fontFamily="spinnaker"
                    color="white"
                  >
                    <Link to="/">CATALINA</Link>
                    <br />
                  </Box>
                </Box>
              </Flex>
              <Flex
                alignItems="center"
                mr="-2"
                d={{ md: "none" }}
                className="flex items-center -mr-2 md:hidden"
              >
                <Button
                  d="inline-flex"
                  justify="center"
                  alignItems="center"
                  ref={btnRef}
                  variantColor="teal"
                  onClick={onOpen}
                >
                  Open
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Box
            zIndex={2}
            d={{ base: "none", md: "block" }}
            ml={{ md: 10 }}
            pr={{ md: 4 }}
            className="hidden md:block md:ml-10 md:pr-4"
          >
            <Link
              style={{ fontSize: "1.25rem", fontFamily: "spinnaker" }}
              to="/about/"
            >
              ABOUT
            </Link>
            <Link
              style={{
                marginLeft: "2rem",
                fontSize: "1.25rem",
                fontFamily: "spinnaker",
              }}
              to="/services/"
            >
              SERVICES
            </Link>
            <Link
              style={{
                marginLeft: "2rem",
                fontSize: "1.25rem",
                fontFamily: "spinnaker",
              }}
              to="/blog/"
            >
              BLOG
            </Link>
            <Link
              style={{
                marginLeft: "2rem",
                fontSize: "1.25rem",
                fontFamily: "spinnaker",
              }}
              to="/contact/"
            >
              CONTACT
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default SmallHeader
