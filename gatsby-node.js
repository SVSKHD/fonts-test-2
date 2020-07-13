/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path=require('path')
const { promises } = require('fs')

const makeRequest=(graphql,request)=>new Promise((resolve,reject)=>{
    resolve(
        graphql(request).then(result=>{
            if(result.errors){
                reject(result.errors)
            }
            return result
        })
    )
})
exports.createPages=({actions,graphql})=>{
const {createPage}=actions
const generateBlogpages=makeRequest(graphql,`
    {
    allStrapiBlogs {
        edges {
        node {
         id
         slug
        }
      }
    }     
    }
`).then(result=>{
    result.data.allStrapiBlogs.edges.forEach(({node})=>{
    createPage({
          path:`/blog/${node.slug}`,
          component:path.resolve(`src/template/blogpage.js`),
          context:{
            id:node.id  
          }
       })
     })
  })
  return Promise.all([generateBlogpages])
}