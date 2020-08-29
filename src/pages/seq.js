import React from "react"
import Tree from "../images/tree-bg.jpg"
import People from "../images/people-overlay.png"
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useWindowScroll } from "react-use"
import TeamMember from "../components/TeamMember"
import "../styles/seq.css"

const Seq = () => {
  const { scrollYProgress, scrollY } = useViewportScroll()
  const { x, y } = useWindowScroll()

  const windowHeight = useMotionValue(y)

  const yPosAnim = useTransform(scrollYProgress, [0, 0.3], [0, 200])

  const opacityAnim = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
      <div className="main-logo -home js-main-logo  -show">
        <a href="/">
          <img
            width="149"
            height="21"
            className="nav _logo _green"
            src="https://d33wubrfki0l68.cloudfront.net/ab0c562df0efa9d35aee5ead288f4a96ec43c25a/e77b4/img/sequoia-mark-full-green.svg"
          />
        </a>
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
              y < 300 ? "nav _nav-links -black" : "nav _nav-links -scrolled"
            }
          >
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
              <span className="js-current-button _section-button -headline -bold -black -active">
                <a href="/people/" className="_filter-button -pointer">
                  Seed / Early
                </a>
              </span>

              <span className="js-current-button _section-button -headline -bold -black ">
                <a href="/people/growth/" className="_filter-button -pointer">
                  Growth
                </a>
              </span>

              <span className="js-current-button _section-button -headline -bold -black ">
                <a
                  href="/people/specialists/"
                  className="_filter-button -pointer"
                >
                  Specialists
                </a>
              </span>

              <span className="js-current-button _section-button -headline -bold -black ">
                <a href="/people/ethos/" className="_filter-button -pointer">
                  Ethos
                </a>
              </span>
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

export default Seq
