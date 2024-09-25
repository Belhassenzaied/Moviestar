import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';  

const NavMovie = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">WATCHTECK</Navbar.Brand> 
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>  
                    <Nav.Link as={Link} to="/popular">Popular Movies</Nav.Link>  
                    <Nav.Link as={Link} to="/new">New Releases</Nav.Link>  
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavMovie;
