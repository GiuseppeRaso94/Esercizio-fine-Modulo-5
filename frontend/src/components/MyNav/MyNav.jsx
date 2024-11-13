import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BookContext } from '../context/BookContext'

const MyNav = () => {
    const { setTextToSearch } = useContext(BookContext)
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container fluid>
                <Navbar.Brand
                    href="http://localhost:5173"
                    className="mx-5 fs-5 text-white"
                >
                    Epi.Books
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center w-100">
                        <Nav.Link
                            href="http://localhost:5173"
                            className="text-white"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white">
                            About
                        </Nav.Link>
                        <Nav.Link href="#" className="text-white">
                            Browse
                        </Nav.Link>
                        <input
                            type="text"
                            placeholder="Search the book"
                            className="ms-3 w-50 p-2"
                            onChange={(e) => setTextToSearch(e.target.value)}
                        ></input>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav
