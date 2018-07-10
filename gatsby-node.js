/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ boundActionCreators, getNode, node }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = boundActionCreators;

    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // Add the group field so posts can be filtered by directory when
    // querying for all markdown files.
    const parentDir = path.basename(path.dirname(node.fileAbsolutePath));
    const group = parentDir === 'pages' ? 'root' : parentDir;
    createNodeField({
      node,
      name: 'group',
      value: group,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        // Data passed to context is available in page queries as GraphQL variables.
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
