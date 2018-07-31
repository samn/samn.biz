import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const contentContainerStyle = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
};

const Layout = ({ children, data }) => (
  <div style={containerStyle}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sam Neubardt' },
        { name: 'keywords', content: 'neubardt, recipes, programming' },
      ]}
    />
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={contentContainerStyle}>
        {children()}
      </div>
    </div>
    <div style={footerContainerStyle}>
      <p style={{paddingRight: 10, margin: 0}}>© {new Date().getFullYear()} Sam Neubardt</p>
      <a style={{height: 31}} rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
      </a>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
