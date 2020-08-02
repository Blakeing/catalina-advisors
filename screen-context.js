const React = require("react")

const ScreenContext = React.createContext({})

exports.ScreenContext = ScreenContext

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const ScreenProvider = props => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  )

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
