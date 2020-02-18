import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <nav>
    <Link to="#about">About me</Link>
    <Link to="#projects">My Projects</Link>
    <Link to="/blog">Blog</Link>
  </nav>
);

export default Menu;
