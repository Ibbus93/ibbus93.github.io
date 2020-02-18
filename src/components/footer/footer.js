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
  const { site: { siteMetadata: { profile: { links } } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            profile {
              links {
                email
                github
                linkedin
                curriculumVitae      
              }  
            }
          }
        }
      }
    `
  );

  const { email, github, linkedin, curriculumVitae } = links;

  return (
    <StyledFooter>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div>
        <a href={`mailto:${email}`} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div>
        <a href={curriculumVitae} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} size="2x" />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
