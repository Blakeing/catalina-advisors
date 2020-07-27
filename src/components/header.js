import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { ChakraDrawer } from "../components/ChakraDrawer"
import { useDisclosure, Button, Flex } from "@chakra-ui/core"

const Header = ({ siteTitle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <header
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1rem`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
          Open
        </Button>
        <DarkModeSwitch />
      </header>
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
