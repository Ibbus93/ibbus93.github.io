import React from "react"
import styled from "styled-components"
import Footer from "../footer"
import Image from "./profileImage"

import './sidebar.scss';

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #c5ccd2;
  max-width: 350px;
`

const MainSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3rem;
  align-items: center;
  justify-content: center;
`

const Sidebar = () => (
  <StyledSidebar>
    <MainSidebar>
      <Image />
      <h2>
        <span>I am Federico</span>, <br/>
        a frontend developer based in Cagliari, Italy
      </h2>
    </MainSidebar>
    <Footer />
  </StyledSidebar>
)

export default Sidebar
