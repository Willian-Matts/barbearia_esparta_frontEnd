import React, { Component } from 'react';

import '../css/Rodape.css';
import { Jumbotron, Container } from 'react-bootstrap'

export default class Rodape extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-rodape">
                    <Container id="box-Logo-rodape">
                        {/* Logo */}
                    </Container>
                </Jumbotron>
            </>
        );
    }
}