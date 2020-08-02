const React = require("react")
const { Provider } =
  typeof window !== `undefined` ? require("./screen-context") : undefined

module.exports = ({ element }) => <Provider>{element}</Provider>
