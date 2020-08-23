import React from "react"
import SEO from "../components/seo"

import { ChakraDrawer } from "../components/ChakraDrawer"
import { Box, useDisclosure } from "@chakra-ui/core"

function IndexPage() {
  const { isOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Test"
      />

      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />

      <Box py={{ base: "86px", lg: "180px" }} bg="black">
        <Box maxW="1280px" mx="auto" px={{ base: "1rem", lg: "2rem" }}>
          <Box
            as="h2"
            fontWeight="600"
            color="#979dad"
            fontSize={{ base: "1.3125rem", md: "2.3125rem" }}
            mb=".25em"
          >
            Commercial Finance Solutions
          </Box>
          <Box
            as="h3"
            fontWeight="600"
            color="white"
            fontSize={{ base: "2.5rem", md: "4rem" }}
            mb=".5em"
            lineHeight="1"
          >
            Extensive Relationships.
          </Box>
          <Box
            as="p"
            fontSize={{ base: "19px", md: "21px" }}
            letterSpacing=".012em"
            color="#c7cdde"
          >
            All growing businesses need capital. At times, it can be difficult
            for a management team to know where to turn to finance an expansion,
            acquisition, or even working capital growth. Catalina can help. We
            have extensive relationships with capital providers of all forms and
            can help your business partner with the right group for your needs.
            Our goal is to alleviate the complexity surrounding the financing
            demands for your business.
          </Box>
        </Box>
      </Box>
      <Box py={{ base: "86px", lg: "180px" }} bg="#404654">
        <Box maxW="1280px" mx="auto" px={{ base: "1rem", lg: "2rem" }}>
          <Box
            as="h2"
            fontWeight="600"
            color="#979dad"
            fontSize={{ base: "1.3125rem", md: "2.3125rem" }}
            mb=".25em"
          >
            Bank Loan Restructuring
          </Box>
          <Box
            as="h3"
            fontWeight="600"
            color="white"
            fontSize={{ base: "2.5rem", md: "4rem" }}
            mb=".5em"
            lineHeight="1"
          >
            Proven Strategies.
          </Box>
          <Box
            as="p"
            fontSize={{ base: "19px", md: "21px" }}
            letterSpacing=".012em"
            color="#c7cdde"
          >
            When a business experiences softness in the market, it can be
            difficult for management to work with existing lenders. Not only
            must a management team continue to operate the business in a tough
            environment, but it must also be concerned about its bank! Catalina
            can help. We are owned and operated by former bankers and are
            experienced in working through challenging loan situations. Whether
            you simply need another voice in the room or need Catalina to take
            the lead on a full restructuring process, we help companies navigate
            the difficulties associated with loan modification and
            restructuring.
          </Box>
        </Box>
      </Box>
      <Box py={{ base: "86px", lg: "180px" }} bg="black">
        <Box maxW="1280px" mx="auto" px={{ base: "1rem", lg: "2rem" }}>
          <Box
            as="h2"
            fontWeight="600"
            color="#979dad"
            fontSize={{ base: "1.3125rem", md: "2.3125rem" }}
            mb=".25em"
          >
            Lender Management
          </Box>
          <Box
            as="h3"
            fontWeight="600"
            color="white"
            fontSize={{ base: "2.5rem", md: "4rem" }}
            mb=".5em"
            lineHeight="1"
          >
            Deep Expertise.
          </Box>
          <Box
            as="p"
            fontSize={{ base: "19px", md: "21px" }}
            letterSpacing=".012em"
            color="#c7cdde"
          >
            Management teams get pulled in many different directions. It can be
            difficult to prioritize your bank reporting over other operational
            demands of your business, which can cause tension between you and
            your lender. Catalina can help. We do the heavy lifting when it
            comes to your bank’s financial reporting, compliance, and borrowing
            base requirements. Also, we assist management teams in identifying
            performance trends, addressing liquidity constraints, and remaining
            in full compliance of all loan reporting requirements.
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default IndexPage
