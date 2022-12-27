import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.config";
import CustomLink from "../customLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-color">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="CustomLink">
            <h3>
              UNIQUE <span className="span">Photography</span>
            </h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <CustomLink to="/home" className="CustomLink">
              HOME
            </CustomLink>
            <CustomLink to="/services" className="CustomLink">
              SERVICES
            </CustomLink>

            <CustomLink to="/contact" className="CustomLink">
              CONTACT
            </CustomLink>
          </Nav>
          <Nav>
            <h5 className="user-name">
              {user?.displayName && user.displayName}
            </h5>
            {user ? (
              <button className="signOut-Btn" onClick={handleSignOut}>
                signOut
              </button>
            ) : (
              <Link to="/login" className="loginLink">
                LOGIN
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
