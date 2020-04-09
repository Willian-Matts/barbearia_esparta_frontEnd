import React, { Component } from 'react';

import ButtonNav from './BottonNav';
import logoVetor from '../image/logo/Logo-3.svg';

import '../css/MenuNav.css';
import { Navbar, Jumbotron, Nav } from 'react-bootstrap'

export default class MenuNav extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-super-header">
                    <Navbar id="box-nav" expand="lg">
                        <Navbar.Brand href="#home" id="box-logo">
                            <img src={logoVetor} alt="Logo Barbearia" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="box-nav-link">
                                <Nav.Link href="#box-carrosel">
                                    <ButtonNav value="Inicio" />
                                </Nav.Link>
                                <Nav.Link href="#box-principal">
                                    <ButtonNav value="Sobre Nós" />
                                </Nav.Link>
                                <Nav.Link href="#box-divisoria">
                                    <ButtonNav value="Serviços" />
                                </Nav.Link>
                                <Nav.Link href="#mapa">
                                    <ButtonNav value="Localização" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Jumbotron>
            </>
        );
    }
}