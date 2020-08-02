const React = require("react")
const { Provider } = require("./screen-context")

module.exports = ({ element }) => <Provider>{element}</Provider>
