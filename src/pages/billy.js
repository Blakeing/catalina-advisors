import React from "react"
import { useContext } from "react"
import { ScreenContext } from "../../screen-context"
import { Box } from "@chakra-ui/core"

const Billy = () => {
  const msg = useContext(ScreenContext)
  console.log(msg.windowSize.height)

  return (
    <>
      <Box bg="red.500" w="100%" h={msg.windowSize.height}>
        hi
      </Box>
      <Box bg="blue.500" w="100%" h={8}>
        hi
      </Box>
    </>
  )
}

export default Billy
