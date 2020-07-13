import React from 'react'
import Img from "gatsby-image"
import {Link} from "gatsby"
import {FaBookReader} from "react-icons/fa"
import {CardSubtitle, CardBody, Card, Button, CardTitle,CardText} from "reactstrap"
import "../components/css/card.css"
export default function PostCard(props) {
    return (
       <div>
       <Card outline color="success">
        <Img className="postcard"  fluid={props.fluid} alt={props.alt} />
        <CardBody>
        <CardTitle><h1>{props.title}</h1></CardTitle>
        <CardSubtitle><h3>{props.subtitle}</h3></CardSubtitle>
        <CardText><p>{props.content}</p></CardText>
        <Link to={props.link}>
          <Button outline color="success"><FaBookReader size={28}/></Button>
        </Link>
        </CardBody>
        </Card>
        </div>
    )
}
