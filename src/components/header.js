import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'underline dotted',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div >
        <Link to="/about" style={{color: 'white'}}>
          About
        </Link>
      </div>
    </div>
  </div>
)

export default Header
