/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql, Link } from "gatsby"
import styled, { keyframes } from 'styled-components'
import Header from './header'
import Footer from './footer'
import { fadeIn } from 'react-animations'

import "./layout.css"

const fadeInAnimation = keyframes`${fadeIn}`;


const Main = styled.main`
  animation: 1.5s ${ fadeInAnimation};
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
