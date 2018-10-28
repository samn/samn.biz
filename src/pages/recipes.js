import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <div>
      {data && data.allMarkdownRemark && data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
            <h3>
              {node.frontmatter.title}
              <span style={{color: '#BBB'}}> — {node.frontmatter.date}</span>
            </h3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
  </Layout>
);

export const query = graphql`
  query RecipesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { fields: { group: { eq: "recipes" } } }) {
      totalCount
      edges {
        node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;

