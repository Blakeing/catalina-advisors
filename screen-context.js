const React = require("react")
const { useWindowSize } = require("@react-hook/window-size")

const ScreenContext = React.createContext({})

exports.ScreenContext = ScreenContext

const ScreenProvider = props => {
  const [width, height] = useWindowSize({ leading: true, wait: 500 })
  return (
    <ScreenContext.Provider value={{ width, height }}>
      {props.children}
    </ScreenContext.Provider>
  )
}

exports.Provider = ScreenProvider
