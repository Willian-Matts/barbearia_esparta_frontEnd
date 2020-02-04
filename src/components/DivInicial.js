import React, { Component } from 'react';

import '../css/DivInicial.css';
import { Jumbotron, Container } from 'react-bootstrap'
import Carrossel from './Carrossel';

export default class DivInicial extends Component {
    render() {
        return (
            <>
                <Carrossel />
                <Jumbotron id="box-div-inicial">
                    <Container>

                    </Container>
                    <Container>

                    </Container>
                </Jumbotron>
            </>
        );
    }
}