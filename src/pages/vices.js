import React, { useState } from "react"
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/core"
import Tree from "../images/tree-bg.jpg"
import Features from "../components/features"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import {
  motion,
  useTransform,
  useViewportScroll,
  useMotionValue,
} from "framer-motion"
import { useWindowScroll } from "react-use"

const Services = () => {
  const { scrollYProgress } = useViewportScroll()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [pin, setPin] = useState()
  const { x, y } = useWindowScroll()

  const [NavColor, setNavColor] = useState({ backgroundColor: "transparent" })

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${Tree}) `,
          position: "relative",
        }}
        h="300px"
        w="100%"
      >
        <motion.div
          as={motion.div}
          height="100%"
          width="100%"
          animate={{
            backgroundColor:
              y > 300
                ? `rgba(0, 0, 0, ${scrollYProgress.current})`
                : `rgba(0, 0, 0, ${scrollYProgress.current})`,
          }}
        >
          <Headroom
            //style={NavColor}
            wrapperStyle={{
              height: "inherit",
              position: "absolute",
              width: "100%",
            }}
            // animate={{
            //   backgroundColor:
            //     pin === true
            //       ? `rgba(0,0,0, ${scrollYProgress.current})`
            //       : `rgba(6,10,19, ${scrollYProgress.current})`,
            // }}
            //onPin={() => setPin(true) && console.log(pin)}

            // onUnpin={() => setNavColor({ opacity: 0 })}
            // onUnfix={() => setNavColor({ backgroundColor: "transparent" })}
            // onPin={() => setNavColor({ backgroundColor: "#eee" })}
          >
            <Box py="6" px={{ base: 4, sm: 6, lg: 8 }}>
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
                          color="black"
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
                  color="black"
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
          </Headroom>
        </motion.div>
        <Flex h="100%" alignItems="center">
          <Box
            w="100%"
            color="black"
            textAlign="center"
            textTransform="uppercase"
            fontFamily="spinnaker"
            fontSize={{ base: "3rem", md: "4.5rem" }}
          >
            Services
          </Box>
        </Flex>
      </Box>
      <Features />
    </>
  )
}

export default Services
