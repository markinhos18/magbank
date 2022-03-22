import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  ButtonGroup,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "./Navbar.scss";
import Logo from "../assets/logo.svg";

const Navigation = ({onClick}) => (
  <Navbar  expand="lg" variant="dark">
    <Container fluid className="px-5">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src={Logo}
            width="60"
            className="d-inline-block align-top"
            alt="NuBank logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light" className="no-line">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                <NavDropdown.Item >
                  <Link to="/login">
                      Pessoa Física
                  </Link>
                </NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item >
                <Link to="/login">
                    Pessoa Jurídica
                </Link>
                </NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" className="no-line" onClick={onClick}>abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
