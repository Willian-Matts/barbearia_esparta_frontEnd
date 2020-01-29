import React, { Component } from 'react';

import '../css/DivInicial.css';
import { Jumbotron, Container } from 'react-bootstrap'

export default class DivInicial extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-div-inicial">
                    <Container id="box-lateral" />
                    <Jumbotron id="box-central">

                        <Container id="box-info">

                        </Container>

                        <Container id="box-circulo">
                            <Container id="box-cinculo_interno">

                            </Container>
                        </Container>

                    </Jumbotron>
                    <Container id="box-lateral" />
                </Jumbotron>
            </>
        );
    }
}