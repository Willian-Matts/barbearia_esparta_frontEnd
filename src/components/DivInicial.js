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
                    <Jumbotron id="box-info-horario">
                        <Container id="info-horario">
                            <h2>Horário de atendimento</h2>
                            <Container id="horario">
                                <h3 id="meio-semana">Segunda a sexta-feira</h3>
                                <p id="h-meio-semana">17h às 20h</p>
                                <hr />
                                <h3 id="final-semana">Finais de semana</h3>
                                <p id="h-final-semana">08h às 12h 14h às 17h</p>
                            </Container>
                        </Container>
                    </Jumbotron>
                </Jumbotron>
            </>
        );
    }
}