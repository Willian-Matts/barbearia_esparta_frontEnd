import React from 'react';

import '../css/CardServico.css';
import { Card } from 'react-bootstrap';

export default function CardServico(props) {
    return (
        <>
            {/* <Container id="card">
                <img src={props.img} alt="Foto do serviço" />
                <p>{props.cardinfo}</p>
            </Container> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.cardTitulo}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}