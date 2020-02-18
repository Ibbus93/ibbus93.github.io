import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

import Footer from "../footer"
import { Menu, PhotoBox } from "./components"

import "./sidebar.scss"

const StyledSidebar = styled.aside`
  height: 100%;
  background: #206297;
  max-width: 400px;
`

const MainSidebar = styled.nav`
  flex: 1;
  padding: 3rem;
  align-items: center;
`

const Sidebar = () => {
  const { site: { siteMetadata: { profile } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            profile {
              name
              role
              place 
            }
          }
        }
      }
    `,
  )

  const { name, role, place } = profile

  return (
    <StyledSidebar>
      <MainSidebar>
        <PhotoBox name={name} role={role} place={place} />
        <Menu />
      </MainSidebar>
      <Footer />
    </StyledSidebar>
  )
}

export default Sidebar
