import React from "react"
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import {logout, login, isAuthenticated, getProfile } from "../utils/auth"

const Navigation = () => {

    const user = getProfile()

    const doLogout = (e) => {
        console.log('Logging out...')
        logout()
        e.preventDefault()
    } 

    const doLogin = (e) => {
        login()
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
                { !isAuthenticated() &&
                    <Nav>
                        <Button href="/" onClick={doLogin}>Accedi / Registrati</Button>
                    </Nav>
                }
                { isAuthenticated() &&
                    <Nav>      
                    <NavDropdown title={user.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/app/t4cassessment">Impostazioni</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={doLogout}>Esci</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                }
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation