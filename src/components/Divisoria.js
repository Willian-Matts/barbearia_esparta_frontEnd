import React, { Component } from 'react';

import '../css/Divisoria.css';
import CampoInfo from './CampoInfo';
import CardServico from './CardServico';
import { Jumbotron } from 'react-bootstrap';
import img1 from '../image/drive-download-20200204T174718Z-001/334600-P9WF72-751.jpg';
import img2 from '../image/drive-download-20200204T174718Z-001/268707-P5604V-803.jpg';
import img3 from '../image/drive-download-20200204T174718Z-001/21506.jpg';

let cardInfo1 = "";
let cardInfo2 = "";
let cardInfo3 = "";

let info = "Serviços completos de barba e cabelo.";
let titulo = "Serviços";

export default class Divisoria extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-divisoria">
                    <Jumbotron id="box-info-servico">
                        <CampoInfo titulo={titulo} info={info} />
                    </Jumbotron>
                    <Jumbotron id="box-card-servico">
                        <CardServico img={img1} cardTitulo="Barba" cardInfo={cardInfo1} />
                        <CardServico img={img2} cardTitulo="Cabelo" cardInfo={cardInfo2} />
                        <CardServico img={img3} cardTitulo="Barba e Cabelo" cardInfo={cardInfo3} />
                    </Jumbotron>
                </Jumbotron>
            </>
        );
    }
}