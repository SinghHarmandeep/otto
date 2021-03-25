import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Otto</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="features">Features</Nav.Link>
                <Nav.Link href="findride">Find RHM</Nav.Link>
                <Nav.Link href="about">About OTTO</Nav.Link>
                <Nav.Link href="pricing">Pricing</Nav.Link>
                <Nav.Link href="contact">Contact Us</Nav.Link>
            </Nav>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <Nav.Link className="my-2 my-sm-0 text-success" href="login">Sign in</Nav.Link>
                <Nav.Link className="btn btn-outline-success my-2 my-sm-0" href="signup">Get started</Nav.Link>
            </form>
        </Navbar>
    )
}

export default navbar;