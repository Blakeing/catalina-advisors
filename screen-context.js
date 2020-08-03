const React = require("react")
const { useWindowSize } = require("./src/utils/getWindow")

const ScreenContext = React.createContext({})

exports.ScreenContext = ScreenContext

const ScreenProvider = props => {
  const { height, width } = useWindowSize()
  return (
    <ScreenContext.Provider value={{ height, width }}>
      {props.children}
    </ScreenContext.Provider>
  )
}

exports.Provider = ScreenProvider
