import React from 'react'
import { Button,Jumbotron, Container,Row,Col } from 'reactstrap'
import {FaFacebookF,FaPinterestP,FaRedditAlien,FaTwitter} from "react-icons/fa"


export default function Footer() {
    const year=new Date().getFullYear()
    return (
        <div>
        <Jumbotron fluid>
        <Container fluid>
          <Row>
          <Col>
          <h3>Copyright  {year}</h3>
          </Col>
          <Col>
          <h3>Our Social handle</h3>
           <Button className="fsh" outline color="success" href=""><FaFacebookF size={28}/></Button>
           <Button className="fsh" outline color="success" href=""><FaPinterestP size={28}/></Button>
           <Button className="fsh" outline color="success" href=""><FaRedditAlien size={28}/></Button>
           <Button className="fsh" outline color="success" href=""><FaTwitter size={28}/></Button>
          </Col>
          </Row>
        </Container>
        </Jumbotron>
        </div>
    )
}
