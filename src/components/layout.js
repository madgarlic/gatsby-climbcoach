import React from "react"
import {Row, Container} from 'react-bootstrap'
import Navigation from './navigation'
import Footer from './footer'


export default function Layout({children}) {
    return (
        <>
        <Container fluid><Navigation/></Container>
        <Container>
            <Row className="d-flex justify-content-center flex-column">{children}</Row>
            <Row className="d-flex justify-content-center"><Footer/></Row>
        </Container>
        </>
    )
}