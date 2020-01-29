import React, { Component } from 'react';

import ButtonNav from './BottonNav';
import logoVetor from '../image/sparta_vetor.png';

import '../css/MenuNav.css';
import { Navbar, Container, Jumbotron, Nav } from 'react-bootstrap'

export default class MenuNav extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-super-header">
                    <Container>
                        <Navbar id="box-nav" expand="lg">
                            <Navbar.Brand href="#home" className="header-brand">
                                <img id="logoNav" src={logoVetor} alt="Logo Esparta" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="box-nav-link">
                                    <Nav.Link href="#home">
                                        <ButtonNav value="teste" />
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <ButtonNav value="testando" />
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <ButtonNav value="teste" />
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <ButtonNav value="testando" />
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <ButtonNav value="teste" />
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <ButtonNav value="testando" />
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </Jumbotron>
            </>
        );
    }
}