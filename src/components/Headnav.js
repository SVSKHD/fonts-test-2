import React,{useState} from 'react'
import { Button, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import {FaAngleDoubleDown} from "react-icons/fa"

export default function Headnav() {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)
    return (
        <div>
        <Navbar>
        <NavbarBrand href="/" className="mr-auto">Tech-Inside</NavbarBrand>
        <Button outline color="success" onClick={toggleNavbar}><FaAngleDoubleDown size={28}/> </Button> 
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
        <NavItem className="navfont">
              <NavLink >Components</NavLink>
        </NavItem>
        <NavItem className="navfont">
              <NavLink >TechStory</NavLink>
        </NavItem>
        </Nav>
        </Collapse>
        </Navbar> 
        </div>
    )
}
