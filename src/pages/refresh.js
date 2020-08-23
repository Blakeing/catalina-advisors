import React from "react"
import { motion } from "framer-motion"

function Refresh() {
  return (
    <div className="container">
      <article className="info">
        <header className="header">
          <span className="subtitle">React Animation</span>
          <h1 className="title">Reveal on Scroll-up</h1>
        </header>
        <section className="content">
          <p>
            Using Framer Motion, the actions bar at the bottom of the screen
            only fades in when scrolled up and fades out whenever we scroll
            down.
          </p>
        </section>
      </article>
      <Actions />
    </div>
  )
}

function Actions() {
  const [lastYPos, setLastYPos] = React.useState(0)
  const [shouldShowActions, setShouldShowActions] = React.useState(false)

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos

      setShouldShowActions(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener("scroll", handleScroll, false)

    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [lastYPos])

  return (
    <motion.div
      className="actions"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 1 } }}
    >
      <button>hi</button>
      <button>sup</button>
      <button>hey</button>
    </motion.div>
  )
}

export default Refresh
