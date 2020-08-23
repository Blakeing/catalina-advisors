/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Container } from "./Container"
import { DarkModeSwitch } from "./DarkModeSwitch"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container px="4" as="main">
        {children}
      </Container>
      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        © {new Date().getFullYear()}, Built with&nbsp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      <DarkModeSwitch />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
