import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 id="about">About me</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <h2 id="projects">My Projects</h2>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
