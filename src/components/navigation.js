import React from "react"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {logout, isAuthenticated } from "../utils/auth"

const Navigation = () => {

    const doLogout = (e) => {
        console.log('Logging out...')
        logout()
        e.preventDefault()
    } 

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
                { isAuthenticated() &&
                    <Nav>      
                    <NavDropdown title="Utente" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/account/settings">Impostazioni</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" onClick={doLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                }
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation