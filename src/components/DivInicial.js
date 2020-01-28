import React, { Component } from 'react';

import '../css/DivInicial.css';
import { Jumbotron, Container } from 'react-bootstrap'

export default class MenuNav extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-div-inicial">
                    <Container id="box-lateral-esquerda" />
                    <Jumbotron id="box-central">

                        <Container>

                        </Container>

                        <Container id="box-circulo">

                        </Container>

                    </Jumbotron>
                    <Container id="box-lateral-direita" />
                </Jumbotron>
            </>
        );
    }
}