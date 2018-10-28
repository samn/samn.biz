import React from 'react'
import { Link } from 'gatsby'

const headerStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  marginRight: '1em',
  textDecoration: 'none',
  padding: 5,
};

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
      }}
    >
      <div style={headerStyle}>
        <Link to="/" style={linkStyle}>
          <h3 style={{margin: 0}}>{siteTitle}</h3>
        </Link>
        <div>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/recipes" style={linkStyle}>Recipes</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header
