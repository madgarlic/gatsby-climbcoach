import React from "react"
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

const Navigation = () => {

    return (
        <Navbar variant="light" bg="light" fixed="top" expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="/favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Climb Coach
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">              
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Item><Nav.Link href="/">Logout</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation