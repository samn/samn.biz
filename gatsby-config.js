module.exports = {
  siteMetadata: {
    title: 'Sam Neubardt: Professional Bad Boy 😎',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
}
