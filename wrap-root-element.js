const React = require("react")
if (typeof window !== `undefined`) {
  const { Provider } = require("./screen-context")
}

module.exports = ({ element }) => <Provider>{element}</Provider>
