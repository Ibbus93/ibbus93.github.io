module.exports = {
  siteMetadata: {
    title: "Federico Ibba | Portfolio and Blog",
    description: "Portfolio and Blog about Federico Ibba, frontend developer",
    author: "Ibbus93",
    profile: {
      name: "Federico Ibba",
      role: "Frontend Developer",
      place: "Cagliari, Italy",
      links: {
        email: "federico.ibba9@gmail.com",
        github: "https://github.com/Ibbus93",
        linkedin: "https://www.linkedin.com/in/federicoibba/",
        curriculumVitae: "https://drive.google.com/open?id=1Yt7kiOeV51GMzqLKw-ESbN5vBx8EfZvi",
      },
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.ico", // This path is relative to the root of the site.
      },
    },
  ],
}
