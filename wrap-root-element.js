const React = require("react")
const { Provider } =
  typeof window !== `undefined` ? require("./screen-context") : null

module.exports = ({ element }) => <Provider>{element}</Provider>
