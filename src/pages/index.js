import React from "react"
import {graphql} from "gatsby"
import "../fonts/fonts.css"
import {BlogSlugToUrl} from "../utils/blogslug"
import Layout from "../components/layouts/Layout"
import Intro from "../components/intro"
import PostCard from "../components/card"
import {Col,Row,Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css"

const IndexPage = ({data}) => (
  <div>
   <Layout>
    <Intro/>
    <div className="card">
    <div>
    <Container fluid="lg">
    <Row xs="1" sm="2" md="3" lg="3">
    
    {data.allStrapiBlogs.nodes.map(blog=>(
      <Col>
      <PostCard
      fluid={blog.CoverImage.childImageSharp.fluid}
      title={blog.Title}
      subtitle={blog.SubTitle}
      content={blog.Content.substring(0,25)}
      link={BlogSlugToUrl(blog.slug)}
      />
      </Col>
    ))}
    
    
    </Row>
    </Container>
    </div>
    </div>
   </Layout>
  </div>
)

export default IndexPage
 
export const pageQuery=graphql`
query IndexQuery {
  allStrapiBlogs {
    nodes {
      Title
      SubTitle
      Content
      slug
      keywords
      CoverImage {
        childImageSharp {
          fluid(maxWidth: 380, maxHeight: 220) {
           ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

`

