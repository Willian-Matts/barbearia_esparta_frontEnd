import React, { Component } from 'react';

import '../css/CampoInfo.css';
import { Container } from 'react-bootstrap'

export default class CampoInfo extends Component {

    render() {
        return (
            <Container id="info-barbeiro">
                <h2>SOBRE NÓS</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Container>
        );
    }
}
