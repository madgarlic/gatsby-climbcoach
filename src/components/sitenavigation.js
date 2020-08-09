import React from "react"
import { Link } from '@reach/router';
import {Navbar, Nav} from 'react-bootstrap'

const SiteNavigation = () => {

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
                Climb Coach Website
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">              
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Item><Link to="/app">App</Link></Nav.Item>
                    <Nav.Item><Link to="/app">Blog</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SiteNavigation