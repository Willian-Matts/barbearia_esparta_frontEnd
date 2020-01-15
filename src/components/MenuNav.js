import React, { Component } from 'react';
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
                                <Navbar expand="lg" variant="dark" bg="ligth">
                                    <Navbar.Brand className="header-brand">
                                        <img id="logoNav" src={logoVetor} alt="Logo Esparta" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Container className="box-nav-link">
                                            <Nav.Link href="#home">
                                                <Button className="button-nav" variant="outline-light">
                                                    <p>Teste</p>
                                                </Button>
                                            </Nav.Link>
                                            <Nav.Link href="#home">
                                                <Button className="button-nav" variant="outline-light">
                                                    <p>Tesasdaste</p>
                                                </Button>
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

/* <div class="nav-menu fixed-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <nav class="navbar navbar-dark navbar-expand-lg">
                                        <a class="navbar-brand" href="index.html"><img src="images/logo-estagia.png" class="img-fluid" alt="logo"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                                            <div class="collapse navbar-collapse" id="navbar">
                                                <ul class="navbar-nav ml-auto">
                                                    <li class="nav-item"> <a class="nav-link active" href="#home">HOME <span class="sr-only">(current)</span></a> </li>
                                                    <li class="nav-item"> <a class="nav-link" href="#features">CARACTERÍSTICAS</a> </li>
                                                    <li class="nav-item"> <a class="nav-link" href="#ferramenta">LAYOUT</a> </li>
                                                    <li class="nav-item"> <a class="nav-link" href="#utilizacao">USABILIDADE</a> </li>
                                                    <li class="nav-item"> <a class="nav-link" href="#preview">PREVIEW</a> </li>
                                                    <li class="nav-item"> <a class="nav-link" href="#contato">CONTATO</a> </li>
                                                    <li class="nav-item"><a onclick="alerta()" class="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Login</a></li>
                                                </ul>
                                            </div>
            </nav>
        </div>
                                </div>
                            </div>
                        </div> */