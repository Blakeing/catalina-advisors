import React from "react"
import Tree from "../images/tree-bg.jpg"
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useWindowScroll } from "react-use"
import TeamMember from "../components/TeamMember"
import "../styles/seq.css"
import { Box, Flex } from "@chakra-ui/core"
import { Link } from "gatsby"

const Seq2 = () => {
  const { scrollYProgress, scrollY } = useViewportScroll()
  const { y } = useWindowScroll()

  const windowHeight = useMotionValue(y)

  const yPosAnim = useTransform(scrollYProgress, [0, 0.3], [0, 200])

  const opacityAnim = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
      <div className="main-logo -home js-main-logo  -show">
        <Box
          as="h1"
          lineHeight="1"
          textTransform="capitalize"
          href="#"
          aria-label="Home"
          fontSize={{ base: "1.5rem" }}
          fontFamily="spinnaker"
          color="black"
          fontWeight="900"
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
          <ul className="nav _nav-links -black">
            <li className="-active">
              <a href="/people/">People</a>
            </li>
            <li>
              <a href="/build/">Build</a>
            </li>
            <li>
              <a href="/companies/">Companies</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{ height: "200vh" }}
        className="page-content js-page-holder -home"
      >
        <div className="hs-container">
          <div
            style={{
              position: "fixed",
              display: "inherit",
              backgroundImage: `url(${Tree})`,
            }}
            className="people  _section-nav  js-people-header hs-header -intro -hs-larger"
          >
            <motion.div
              animate={{ opacity: opacityAnim, y: yPosAnim }}
              style={{ top: 0 }}
              className="_header-content js-people-header-content hs-header-content"
            >
              <Flex
                w="100%"
                color="black"
                maxW="1080px"
                fontSize={{ base: "3rem" }}
                justifyContent="center"
                fontFamily="spinnaker"
                mx="auto"
              >
                SERVICES
              </Flex>
            </motion.div>
          </div>
          <div
            style={{ marginTop: 298 }}
            className="people _content-holder js-people-content hs-page"
          >
            <div
              className="team _intro -body-copy-medium -light -grey "
              style={{ visibility: "visible" }}
            >
              <p>
                We partner early. We’re comfortable with the rough imperfection
                of a new venture. We help founders from day zero, when the DNA
                of their businesses first takes shape.
              </p>
              {scrollY.current}
              <br />
            </div>
            <div className="team _team-holder">
              <TeamMember />
              <TeamMember />
              <TeamMember />
              <TeamMember />
              <TeamMember />
              <TeamMember />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Seq2
