import React, { Component } from 'react';

import '../css/DivInicial.css';
import { Jumbotron, Container } from 'react-bootstrap'
import Carrossel from './Carrossel';
import Barbeiro from '../image/drive-download-20200204T174718Z-001/2687385.jpg';

export default class DivInicial extends Component {
    render() {
        return (
            <>
                <Carrossel />
                <Jumbotron id="box-principal">
                    <Jumbotron id="box-info-barbeiro">
                        <Container id="info-barbeiro">
                            <h2>SOBRE NÓS</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Container>
                        <Container id="img-barbeiro">
                            <img src={Barbeiro} alt="Foto do barbeiro" />
                        </Container>
                    </Jumbotron>
                    <Jumbotron id="box-info-indereco">
                        <Container id="info-indereco">

                        </Container>
                    </Jumbotron>
                </Jumbotron>
            </>
        );
    }
}