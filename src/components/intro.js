import React from 'react'
import {Jumbotron,Container,Row, } from "reactstrap"
import {} from "react-icons/fa"
import Type from './type'

export default function Intro() {
    return (
        <div>
            <Jumbotron fluid>
             <h1 className="display-3">SVSKHD</h1>
             <hr/>
             <Type/>
            </Jumbotron>
        </div>
    )
}
