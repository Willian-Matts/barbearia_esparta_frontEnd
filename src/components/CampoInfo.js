import React from 'react';

import '../css/CampoInfo.css';
import { Container } from 'react-bootstrap'

export default function CampoInfo(props) {

    return (
        <Container id="info-barbeiro">
            <h2>{props.titulo}</h2>
            <p>{props.info}</p>
        </Container>
    );
}
