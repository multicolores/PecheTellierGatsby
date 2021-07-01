/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

import Scroll from "./locomotiveScroll"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./locomotive-scroll.css"
import "./styles.scss"

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
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

      {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
      <Scroll callbacks={location} />
      <PageTransition>
      <div id="container">
        <main>{children}</main>
        <Footer />
      </div>
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
