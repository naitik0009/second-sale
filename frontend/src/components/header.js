import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
const Header = ()=>{

    return (

            <header>
                <Navbar bg="light" expand="lg" collapseOnSelect>

                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand href="#home"><i className="fas">Second Sale</i></Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                               <LinkContainer to="/cart">
                                   <Nav.Link><i className="fas fa-shopping-cart"> Cart</i></Nav.Link>
                               </LinkContainer>
                               <LinkContainer to="/login">
                                   <Nav.Link href="/login"><i className="fas fa-user"> Login</i></Nav.Link>
                               </LinkContainer>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

    );
};

export default Header;