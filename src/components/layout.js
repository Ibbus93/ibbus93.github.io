import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import "./layout.scss"
import Sidebar from "./sidebar"

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  background: #F4FAFF;
`

const Layout = ({ children }) => (
  <AppContainer id="app-container">
    <Sidebar />
    <MainContent>
      {children}
    </MainContent>
  </AppContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
