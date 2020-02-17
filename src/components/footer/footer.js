import React from "react"
import { a } from "gatsby"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"

import './footer.scss';

const StyledFooter = styled.footer`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Footer = () => (
  <StyledFooter>
    <div>
      <a href="https://github.com/Ibbus93" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/federicoibba/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
    <div>
      <a href="https://drive.google.com/open?id=1Yt7kiOeV51GMzqLKw-ESbN5vBx8EfZvi" target="_blank" >
        <FontAwesomeIcon icon={faFilePdf} size="2x" />
      </a>
    </div>
    <div>
      <a href="mailto:federico.ibba9@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  </StyledFooter>
)

export default Footer
