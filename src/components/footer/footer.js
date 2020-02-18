import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

const Footer = () => {
  const { site: { profileLinks } } = useStaticQuery(
    graphql`
      query {
        site {
          profileLinks {
            email
            github
            linkedin
            curriculumVitae        
          }
        }
      }
    `
  );

  const { email, github, linkedin, curriculumVitae } = profileLinks;

  return (
    <StyledFooter>
      <div>
        <a href={github} target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div>
        <a href={linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div>
        <a href={curriculumVitae} target="_blank" >
          <FontAwesomeIcon icon={faFilePdf} size="2x" />
        </a>
      </div>
      <div>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
