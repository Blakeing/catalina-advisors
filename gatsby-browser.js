const React = require("react")
const wrapRootElement = require("./wrap-root-element")

exports.onClientEntry = () => {
  console.log("We've started!")
  exports.wrapRootElement = wrapRootElement
}
