import React, { Component } from 'react';

import '../css/DivInicial.css';
import { Jumbotron, Container } from 'react-bootstrap'
import Carrossel from './Carrossel';
import CampoInfo from './CampoInfo';
import Barbeiro from '../image/drive-download-20200204T174718Z-001/2687385.jpg';

let info = "Somos dedicados a trazer conforto aos homens em um ambiente agradável e aconchegante, no qual se sintam membros da família espartana. Aqui, barba, cabelo e bigode é coisa séria!";
let titulo = "Sobre nós";

export default class DivInicial extends Component {
    render() {
        return (
            <>
                <Carrossel />
                <Jumbotron id="box-principal">
                    <Jumbotron id="box-info-barbeiro">
                        <CampoInfo titulo={titulo} info={info}/>
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