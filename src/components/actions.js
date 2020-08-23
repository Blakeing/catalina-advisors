import React from "react"
import { motion } from "framer-motion"

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
      transition={{ opacity: { duration: 0.2 } }}
    >
      <button>
        <span className="fas fa-share-square" />
      </button>
      <button>
        <span className="fas fa-user" />
      </button>
      <button>
        <span className="fas fa-times" />
      </button>
    </motion.div>
  )
}

export default Actions
