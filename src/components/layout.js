/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./layout.css"

library.add(fab, faCheckSquare, faCoffee)

const Main = styled.main`
  
  margin: 0 auto;
`


const Layout = ({ children }) => {


  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
