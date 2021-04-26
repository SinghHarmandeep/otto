import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

import { AccessToken } from '../../utils/app'
import jwtDecode from "jwt-decode";

const navbar = (props: navProps) => {

    const history = useHistory();
    const location = useLocation()
    // console.log(location);

    // console.log(props.arr[0]);

    
    const [user, setUser] = useState(AccessToken);
    
    useEffect(() => {
        if (props.arr[0]) {
            // console.log('updating state' + AccessToken + localStorage.getItem('token'));
            //for some odd reason Accesstoken wouldn't get updated!
            setUser(localStorage.getItem('token'))
        }
    }, [location])
    
    // console.log(user + "---user is");

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

            {user ? (
                < div className="form-inline my-2 my-lg-0">
                    <p className="my-2 my-sm-0 mr-3 text-success">{decodedUser?.handle}</p>
                    <Nav.Link className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} >Log out</Nav.Link>
                </div>
            ) : (
                <form className="form-inline my-2 my-lg-0">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <Nav.Link className="my-2 my-sm-0 text-success" href="login">Sign in</Nav.Link>
                    <Nav.Link className="btn btn-outline-success my-2 my-sm-0" href="signup">Get started</Nav.Link>
                </form>
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