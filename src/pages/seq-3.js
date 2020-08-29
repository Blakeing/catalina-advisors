import React from "react"
import Tree from "../images/rice-bg-dark.png"
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useWindowScroll } from "react-use"
import TeamMember from "../components/TeamMember"
import Features from "../components/features"
import "../styles/seq.css"
import { Box, Flex } from "@chakra-ui/core"
import { Link } from "gatsby"

const Seq3 = () => {
  const { scrollYProgress, scrollY } = useViewportScroll()
  const { y } = useWindowScroll()

  const windowHeight = useMotionValue(y)

  const yPosAnim = useTransform(scrollYProgress, [0, 0.3], [0, 200])

  const opacityAnim = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
      <div className="main-logo -home js-main-logo  -show">
        <Box
          className={y < 300 ? "-white" : "-scrolled"}
          as="h1"
          lineHeight="1"
          textTransform="capitalize"
          href="#"
          aria-label="Home"
          fontSize={{ base: "1.5rem" }}
          fontFamily="Cormorant Garamond"
          letterSpacing=".25em"
        >
          <Link to="/">CATALINA</Link>
          <br />
        </Box>
      </div>
      <div
        className={
          y < 300
            ? "nav js-nav-container _container -show"
            : "nav js-nav-container _container -show -scrolled "
        }
      >
        <div className="nav _right js-nav-right">
          <ul
            className={
              y < 300 ? "nav _nav-links -white" : "nav _nav-links -scrolled"
            }
          >
            <li className="-active">
              <a href="/people/">About</a>
            </li>
            <li>
              <a href="/build/">Services</a>
            </li>
            <li>
              <a href="/companies/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content js-page-holder -home">
        <div className="hs-container">
          <div
            style={{
              position: "fixed",
              display: "inherit",
              backgroundSize: "contain",
              backgroundImage: `url(${Tree})`,
            }}
            className="people  _section-nav  js-people-header hs-header -intro -hs-larger"
          >
            <motion.div
              animate={{ opacity: opacityAnim, y: yPosAnim }}
              style={{
                top: 0,
              }}
              className="_header-content js-people-header-content hs-header-content"
            >
              <Flex
                w="100%"
                h="100%"
                color="white"
                maxW="1080px"
                fontSize={{ base: "3rem" }}
                justifyContent="center"
                fontFamily="Cormorant Garamond"
                mx="auto"
                letterSpacing=".1em"
              >
                <span style={{ color: "white" }}>Our</span>
                &nbsp;
                <span style={{ color: "#afd4ee" }}>Services</span>
              </Flex>
            </motion.div>
          </div>

          <div
            style={{ marginTop: 298 }}
            className="people _content-holder js-people-content hs-page"
          >
            <div
              style={{
                visibility: "visible",
                paddingTop: 90,
                paddingBottom: 90,
              }}
            >
              <Box maxW="1024px" mx="auto" px={{ base: "1rem", lg: "2rem" }}>
                <Box
                  as="h2"
                  fontSize={{ base: "1.3125rem", md: "2.3125rem" }}
                  mb=".25em"
                  color="#00205B"
                  fontFamily="Cormorant Garamond"
                >
                  Commercial Finance Solutions
                </Box>
                <Box
                  as="h3"
                  color="#034EA1"
                  fontSize={{ base: "2.5rem", md: "4rem" }}
                  mb=".5em"
                  lineHeight="1"
                  fontFamily="Cormorant Garamond"
                >
                  Extensive Relationships.
                </Box>
                <Box
                  as="p"
                  fontSize={{ base: "19px", md: "21px" }}
                  letterSpacing=".012em"
                  color="#4D4D4F"
                  fontFamily="Cormorant Garamond"
                >
                  All growing businesses need capital. At times, it can be
                  difficult for a management team to know where to turn to
                  finance an expansion, acquisition, or even working capital
                  growth. Catalina can help. We have extensive relationships
                  with capital providers of all forms and can help your business
                  partner with the right group for your needs. Our goal is to
                  alleviate the complexity surrounding the financing demands for
                  your business.
                </Box>
              </Box>
            </div>
            <div
              style={{
                visibility: "visible",
                paddingTop: 90,
                paddingBottom: 90,
                backgroundColor: "#d7e3ed",
              }}
            >
              <Box maxW="1024px" mx="auto" px={{ base: "1rem", lg: "2rem" }}>
                <Box
                  as="h2"
                  color="#00205b"
                  fontSize={{ base: "1.3125rem", md: "2.3125rem" }}
                  mb=".25em"
                  fontFamily="Cormorant Garamond"
                >
                  Commercial Finance Solutions
                </Box>
                <Box
                  as="h3"
                  color="#034EA1"
                  fontSize={{ base: "2.5rem", md: "4rem" }}
                  mb=".5em"
                  lineHeight="1"
                  fontFamily="Cormorant Garamond"
                  color="#034ea1"
                >
                  Extensive Relationships.
                </Box>
                <Box
                  as="p"
                  fontSize={{ base: "19px", md: "21px" }}
                  letterSpacing=".012em"
                  color="#4d4d4f"
                  fontFamily="Cormorant Garamond"
                >
                  All growing businesses need capital. At times, it can be
                  difficult for a management team to know where to turn to
                  finance an expansion, acquisition, or even working capital
                  growth. Catalina can help. We have extensive relationships
                  with capital providers of all forms and can help your business
                  partner with the right group for your needs. Our goal is to
                  alleviate the complexity surrounding the financing demands for
                  your business.
                </Box>
              </Box>
            </div>
            <div
              style={{
                visibility: "visible",
                paddingTop: 90,
                paddingBottom: 90,
              }}
            >
              <Box maxW="1024px" mx="auto" px={{ base: "1rem", lg: "2rem" }}>
                <Box
                  as="h2"
                  fontSize={{ base: "1.3125rem", md: "2.3125rem" }}
                  mb=".25em"
                  color="#00205B"
                  fontFamily="Cormorant Garamond"
                >
                  Commercial Finance Solutions
                </Box>
                <Box
                  as="h3"
                  color="#034EA1"
                  fontSize={{ base: "2.5rem", md: "4rem" }}
                  mb=".5em"
                  lineHeight="1"
                  fontFamily="Cormorant Garamond"
                >
                  Extensive Relationships.
                </Box>
                <Box
                  as="p"
                  fontSize={{ base: "19px", md: "21px" }}
                  letterSpacing=".012em"
                  color="#4D4D4F"
                  fontFamily="Cormorant Garamond"
                >
                  All growing businesses need capital. At times, it can be
                  difficult for a management team to know where to turn to
                  finance an expansion, acquisition, or even working capital
                  growth. Catalina can help. We have extensive relationships
                  with capital providers of all forms and can help your business
                  partner with the right group for your needs. Our goal is to
                  alleviate the complexity surrounding the financing demands for
                  your business.
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Seq3
