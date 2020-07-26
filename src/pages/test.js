import React from "react"
import { ChakraDrawer } from "../components/ChakraDrawer"
import { useDisclosure, Button, Flex } from "@chakra-ui/core"

import { Marketing } from "../components/Marketing"

import Layout from "../components/layout"

const Test = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Layout>
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Flex align="flex-start" justify="flex-start" w="100%">
        <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
          Open
        </Button>
      </Flex>
      <Marketing />
      <Marketing />
      <Marketing />
    </Layout>
  )
}

export default Test
