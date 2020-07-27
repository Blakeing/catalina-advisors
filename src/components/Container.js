import React from "react"
import { Flex } from "@chakra-ui/core"

export const Container = props => {
  return (
    <Flex
      direction="column"
      minHeight="calc(100vh - 9rem)"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    />
  )
}
