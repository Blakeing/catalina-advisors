import React from "react"
import { Box, Flex, Image, Input, Button, Stack } from "@chakra-ui/core"
import Headers from "../components/headers"
import Typing from "../images/fa-contact.jpg"
import Form from "../images/fa-contact-form.jpg"
import {
  Textarea,
  PseudoBox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core"

const Contact = () => {
  return (
    <>
      <Headers />
      <Flex
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,19,46,0.6) 0%,rgba(0,19,46,0.6) 50%), url(${Typing}) `,
        }}
        mt="1.5rem"
        px="1rem"
        h="250px"
        w="100%"
        alignItems="center"
      >
        <Box
          w="100%"
          color="white"
          fontWeight="600"
          maxW="1080px"
          mx="auto"
          fontSize={{ base: "3rem", md: "6rem" }}
        >
          Contact Us
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        maxW="1080px"
        mx="auto"
        as="h1"
        py="3rem"
        px={{ base: "1rem" }}
      >
        <Box mr="5.5%" w={{ base: "100%", lg: "36.7%;" }}>
          <p>(255) 352-6258</p>
          <p>
            <a href="mailto:hello@divifinancialadvisor.com&nbsp;">
              hello@divifinancialadvisor.com&nbsp;
            </a>
          </p>
          <p>
            5678 Extra Rd. #123
            <br /> San Francisco, CA 94122
          </p>
        </Box>
        <Box
          p="2.5rem"
          bg="gray.500"
          h="15rem"
          w={{ base: "100%", lg: "57.8%" }}
        >
          <h3>Monday – Friday</h3>
          <p>10am – 6pm</p>
          <br />
          <h3>Monday – Friday</h3>
          <p>10am – 6pm</p>
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        py="3rem"
        maxW="1080px"
        mx="auto"
        as="h1"
        mt={8}
        px={{ base: "1rem" }}
      >
        <Box py="1.75rem" mr="5.5%" w={{ base: "100%", lg: "47.25%" }}>
          <Box
            as="h2"
            pb="1.75rem"
            fontSize="3rem"
            lineHeight="1"
            fontWeight="600"
          >
            Setup a Free
            <br />
            Consulation
          </Box>

          <Box as="form">
            <Stack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="email">Name</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="Here is a sample placeholder"
                  aria-describedby="email-helper-text"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="Here is a sample placeholder"
                  aria-describedby="email-helper-text"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Comments</FormLabel>
                <Textarea
                  variant="outline"
                  mb={5}
                  placeholder="Here is a sample placeholder"
                />
              </FormControl>
              <Flex justifyContent="flex-end">
                <Button px={4} py={2}>
                  Send Message
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Box>
        <Box py="1.75rem" w={{ base: "100%", lg: "47.25%" }}>
          <Image maxH="700px" src={Form} />
        </Box>
      </Flex>
    </>
  )
}

export default Contact
