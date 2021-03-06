import React from "react"
import { useColorMode, Switch } from "@chakra-ui/core"

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <Switch
      position="fixed"
      zIndex={10}
      bottom="1rem"
      left="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
