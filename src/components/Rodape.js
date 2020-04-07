import React, { Component } from 'react';

import '../css/Rodape.css';
import logoVetor from '../image/logo/Logo-3.svg';
import { Jumbotron, Container, Nav } from 'react-bootstrap'

export default class Rodape extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-rodape">
                    <Container id="box-redes-sociais">
                        {/* redes sociais  */}
                    </Container>
                    <Container id="box-Logo-rodape">
                        <Nav.Link href="#box-div-inicial">
                            <img src={logoVetor} alt="Logo Barbearia" />
                        </Nav.Link>
                    </Container>
                </Jumbotron>
            </>
        );
    }
}