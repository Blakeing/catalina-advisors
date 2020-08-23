const wrapRootElement = require("./wrap-root-element")
require("./src/styles/seq.css")

exports.wrapRootElement = wrapRootElement

exports.onClientEntry = () => {
  console.log("hi")
}
