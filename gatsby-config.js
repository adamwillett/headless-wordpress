module.exports = {
  siteMetadata: {
    title: "Headless WordPress & Gatsby",
    author: "Adam Willett",
    description: "Demo Gatsby & WordPress Integration.",
    social: {
      twitter: "Twitter",
      instagram: "Instagram",
      facebook: "Facebook",
      linkedin: "LinkedIn"
    }
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost:10003/graphql`
      }
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
};
