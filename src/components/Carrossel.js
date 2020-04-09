import React, { Component } from 'react';

import '../css/Carrossel.css';
import { Carousel, Jumbotron } from 'react-bootstrap'
import Img01 from '../image/drive-download-20200204T174718Z-001/2746170.jpg';
import Img02 from '../image/drive-download-20200204T174718Z-001/2746170.jpg';
import Img03 from '../image/drive-download-20200204T174718Z-001/2746170.jpg';
// import GlowingButton from './GlowingButton.js';

export default class Carrossel extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-carrosel">
                    <Carousel>
                        <Carousel.Item className="imgCarrosel">
                            <img className="d-block w-100" src={Img01} alt="Imagem barbearia" />
                            {/* <Carousel.Caption>

                            </Carousel.Caption> */}
                        </Carousel.Item>

                        <Carousel.Item className="imgCarrosel">
                            <img className="d-block w-100" src={Img02} alt="Imagem barbearia" />
                        </Carousel.Item>

                        <Carousel.Item className="imgCarrosel">
                            <img className="d-block w-100" src={Img03} alt="Imagem barbearia" />
                        </Carousel.Item>
                    </Carousel>
                </Jumbotron>
                {/* <Jumbotron id="divisao-carrosel">
                    <GlowingButton value="teste" />
                </Jumbotron> */}
            </>
        );
    }
}