import React from "react"
import { Box, Flex, Image, Stack, Button } from "@chakra-ui/core"
import Headers from "../components/headers"
import Typing from "../images/fa-contact.jpg"
import One from "../images/fa-about-1.jpg"

const Blog = () => {
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
          Blog
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        py="3.5rem"
        flexDirection="row"
        maxW="1080px"
        as="article"
        mx="auto"
        px={{ base: "1rem", md: "0" }}
      >
        <Box
          w={{ base: "100%", lg: "60%" }}
          as="a"
          mb="0"
          color="white"
          fontWeight="600"
        >
          <Image w="100%" maxHeight="380px" src={One} />
        </Box>
        <Flex
          justifyContent="center"
          w={{ base: "100%", lg: "40%" }}
          flexDirection="column"
          fontWeight="600"
        >
          <Box px={{ base: "0", lg: "3.5rem" }}>
            <Box
              as="h2"
              mb=".4em"
              lineHeight="1.15em"
              fontSize={{ base: "3rem", md: "3rem" }}
            >
              Github Source
            </Box>
            <Box as="p">hi</Box>
          </Box>
        </Flex>
      </Flex>
      <Box as="hr" mx="auto" maxW="1080px" />
      <Box py="3.5rem" maxW="1112px" mx="auto" w="100%">
        <Box
          h="auto"
          d="grid"
          gridGap="1rem"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          <Flex justifyContent="center">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              maxW={{ base: `calc(100% - 2rem)`, lg: "320px" }}
            >
              <Stack spacing={4}>
                <Box>
                  <Image w="100%" height="200px" src={One} />
                </Box>
                <Box as="h3" m="0">
                  Title - Card 1
                </Box>
                <Box as="p" contenteditable>
                  Medium length description with a few more words here. Medium
                  length description with a few more words here.
                </Box>
                <Flex justifyContent="flex-start">
                  <Button variantColor="teal" px={4} py={2}>
                    Read More
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              maxW={{ base: `calc(100% - 2rem)`, lg: "320px" }}
            >
              <Stack spacing={4}>
                <Box>
                  <Image w="100%" height="200px" src={One} />
                </Box>
                <Box as="h3" m="0">
                  Title - Card 1
                </Box>
                <Box as="p" contenteditable>
                  Medium length description with a few more words here. Medium
                  length description with a few more words here.
                </Box>
                <Flex justifyContent="flex-start">
                  <Button variantColor="teal" px={4} py={2}>
                    Read More
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              maxW={{ base: `calc(100% - 2rem)`, lg: "320px" }}
            >
              <Stack spacing={4}>
                <Box>
                  <Image w="100%" height="200px" src={One} />
                </Box>
                <Box as="h3" m="0">
                  Title - Card 1
                </Box>
                <Box as="p" contenteditable>
                  Medium length description with a few more words here. Medium
                  length description with a few more words here.
                </Box>
                <Flex justifyContent="flex-start">
                  <Button variantColor="teal" px={4} py={2}>
                    Read More
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              maxW={{ base: `calc(100% - 2rem)`, lg: "320px" }}
            >
              <Stack spacing={4}>
                <Box>
                  <Image w="100%" height="200px" src={One} />
                </Box>
                <Box as="h3" m="0">
                  Title - Card 1
                </Box>
                <Box as="p" contenteditable>
                  Medium length description with a few more words here. Medium
                  length description with a few more words here.
                </Box>
                <Flex justifyContent="flex-start">
                  <Button variantColor="teal" px={4} py={2}>
                    Read More
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Blog
