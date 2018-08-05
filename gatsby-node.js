const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
// const path = require('path')

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators

//   const postTemplate = path.resolve('src/templates/post.js')
//   const workPreviewTemplate = path.resolve('src/templates/workPreview.js')

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               layout
//               title
//               tldr
//               path
//               type
//               external
//             }
//           }
//         }
//       }
//     }
//   `).then(res => {
//       if (res.errors) {
//         return Promise.reject(res.errors)
//       }

//       const posts = res.data.allMarkdownRemark.edges

//       posts.forEach(({ node }, index) => {
//         const checkType = () => {
//           if (node.frontmatter.layout === 'post') {
//             return postTemplate
//           } else if (node.frontmatter.layout === 'work') {
//             console.log('workTemplate')
//             return workPreviewTemplate
//           } else {
//             console.log('postTemplate')
//             return postTemplate
//           }
//         }

//         createPage({
//           path: node.frontmatter.path,
//           component: checkType(),
//           context: {
//             path: node.frontmatter.path,
//             prev: index === 0 ? null : posts[index - 1].node,
//             next: index === posts.length - 1 ? null : posts[index + 1].node
//           }
//         })
//       })
//     })
// }
