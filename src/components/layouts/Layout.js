import React from 'react'
import Headnav from '../Headnav'
import Footer from '../footer'
import {Container} from "reactstrap"

export default function Layout(props) {
    return (
        <div>
            <Container>
            <Headnav/>
            </Container>
            {props.children}
            <Footer/>
        </div>
    )
}
