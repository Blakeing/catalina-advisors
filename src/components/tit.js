import React, { useEffect, useState } from "react"
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/core"
import { ChakraDrawer } from "../components/ChakraDrawer"
import { Link } from "gatsby"
import { useWindowScroll } from "react-use"
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion"

const Tit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const x = useMotionValue(0)
  const background = useTransform(x, [ 0, 100], [ "#60F", "#0BF"])

  const { scrollYProgress } = useViewportScroll()

  return (
    <>
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />

      <Box bg="red.500" py="6" px={{ base: 4, sm: 6, lg: 8 }}>
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
      <Flex alignItems="center" justify="center" style={{ height: 1000 }}>
        <Box
          as={motion.div}
          w="100%"
          h="100%"
          animate={{ backgroundColor: background}}
          // animate={{
          //   backgroundColor: `rgba("255, 234, 20, ${scrollYProgress}")`,
          // }}
          // style={{
          //   scaleX: scrollYProgress,
          // }}
        >
          <Box as="h1" fontSize="4rem">
            aihsfdadshf;ais
          </Box>
        </Box>
      </Flex>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: background,
          display: "flex",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            backgroundColor: "#fff",
            x: x,
            cursor: "grab",
          }}
          drag="x"
          dragConstraints={{
            right: 0,
            left: 0,
          }}
          whileTap={{ cursor: "grabbing" }}
        />
      </motion.div>
    </>
  )
}

export default Tit
