import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ResumeData from "../../utils/ResumeData";
import "./Header.css";

import { useState } from "react";

const Header = (props) => {
  const [resuemeNav, setResumeNav] = useState(true);
  const [portfolioNav, setPortfolioNav] = useState(false);
  const [aboutNav, setAboutNav] = useState(false);
  const setResumeHandler = () => {
    setResumeNav(true);
    setPortfolioNav(false);
    setAboutNav(false);
  };

  const setPortfolioHandler = () => {
    setResumeNav(false);
    setPortfolioNav(true);
    setAboutNav(false);
  };

  const setAboutHandler = () => {
    setResumeNav(false);
    setPortfolioNav(false);
    setAboutNav(true);
  };

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="p-0 m-0">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            onClick={setResumeHandler}
            as={NavLink}
            to="/"
            className={resuemeNav ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            onClick={setPortfolioHandler}
            className={portfolioNav ? "header_link_active" : "header_link"}
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="About"
            onClick={setAboutHandler}
            className={aboutNav ? "header_link_active" : "header_link"}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
