const React = require("react")

const ScreenContext = React.createContext({})

exports.ScreenContext = ScreenContext

const ScreenProvider = props => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  )

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <ScreenContext.Provider value={{ windowDimensions }}>
      {props.children}
    </ScreenContext.Provider>
  )
}

exports.Provider = ScreenProvider
