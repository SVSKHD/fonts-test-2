import React from 'react'
import {Link} from "gatsby"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import {Container,Row,Col,Button } from "reactstrap"
import {FaBackward} from "react-icons/fa"
import Layout from "../components/layouts/Layout"
import Collapsy from "../components/collapsible"
import "./blogpage.css"

export default function Blogpage({data}) {
    return (
        <div>
            <Layout>
            <div className="return">
            <Link to="/">   
            <Button outline color="success"><FaBackward size={28}/></Button>
            </Link>
            </div>
            <div className="Blogsection">
            <Container>
            <Col>
            <Img width="100%" fluid={data.strapiBlogs.CoverImage.childImageSharp.fluid} />
            </Col>
           </Container>
           <Container>
            <Col>
            <h1>{data.strapiBlogs.Title}</h1>
            <h2>{data.strapiBlogs.SubTitle}</h2>
            <p>{data.strapiBlogs.Content}</p>
            </Col>
            </Container>
            </div>
            <div className="sharesection">
            <Container>
            <Collapsy/>
            </Container>
            </div>
            <div className="blogend">
            <h4>stay connected</h4>
            <h4>to</h4>   
            <h2 className="display-3">SVSKHD</h2>
            </div>
            </Layout>
        </div>
    )
}

export const query=graphql`
query BlogQuery($id:String!) {
    strapiBlogs(id:{eq: $id}) {
      Title
      SubTitle
      Content
      id
      keywords
      slug
      CoverImage {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
    }
  }
`

