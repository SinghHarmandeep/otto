import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

import { Style } from './navStyle'

import { getAccessToken } from '../../../utils/app'
import jwtDecode from "jwt-decode";

const navbar = (props: navProps) => {

    const history = useHistory();
    const location = useLocation()

    const [user, setUser] = useState(getAccessToken());

    useEffect(() => {
        if (props.arr[0]) {
            setUser(getAccessToken())
        }
    }, [location])

    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
        props.arr[1](false);
        history.push('/')
    }

    let decodedUser: any;
    if (user) {
        // console.log(user + "user here");
        try {
            decodedUser = jwtDecode(user)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Navbar bg="dark"
            variant="dark"
            style={Style}>
            <Navbar.Brand href="/">OttO</Navbar.Brand>
            <Nav className='mr-auto'>
                {(user) && <Nav.Link href="findride">Find Ride</Nav.Link>}
                <Nav.Link href="about">About OTTO</Nav.Link>
                <Nav.Link href="drive">For Drivers</Nav.Link>
                <Nav.Link href="contact">Contact Us</Nav.Link>
                {/* <Nav.Link href="features">Features</Nav.Link> */}
            </Nav>

            {user ? (
                < div className="ml-auto form-inline my-2 my-lg-0">
                    <p className="my-2 my-sm-0 mr-3 text-success">{decodedUser?.handle}</p>
                    <Nav.Link className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} >Log out</Nav.Link>
                </div>
            ) : (
                <Nav className="ml-auto navbar-nav">
                    <Nav.Link className="mr-2 my-sm-0 text-success" href="login">Sign in</Nav.Link>
                    <Nav.Link className="btn btn-outline-success my-4 my-sm-0 text-success" href="signup">Get started</Nav.Link>
                </Nav>
            )
            }
        </Navbar >
    )
}

// export interface navProps extends RouteComponentProps{
export interface navProps {
    arr: any
}

export default navbar;