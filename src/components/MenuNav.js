import React, { Component } from 'react';

import ButtonNav from './BottonNav';
import logoVetor from '../image/sparta_vetor.png';

import '../css/MenuNav.css'
import { Navbar, Container, Row, Col, Jumbotron, Nav, Button } from 'react-bootstrap'

export default class MenuNav extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-super-header">
                    <Container>
                        <Row>
                            <Col>
                                <Navbar id="box-nav">
                                    <Navbar.Brand className="header-brand">
                                        <img id="logoNav" src={logoVetor} alt="Logo Esparta" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Container className="box-nav-link">
                                            <Nav.Link href="#home">
                                                <ButtonNav name="teste" />
                                            </Nav.Link>
                                            <Nav.Link href="#home">
                                                <ButtonNav name="testando" />
                                            </Nav.Link>
                                        </Container>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                {/* <Container className="box-nav">
                    <Container>
                        <Row>
                            <Col className="col-md-12">
                                <Navbar className="menu shadow">
                                    <Navbar.Brand href="index.html" id="box-logo">
                                        <img id='espartaVetor' src={logoVetor} alt='Logo Barbearia esparta' />
                                    </Navbar.Brand>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </Container> */}

            </>
        );
    }
}