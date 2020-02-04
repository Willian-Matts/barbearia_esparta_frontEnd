import React, { Component } from 'react';

import '../css/Carrossel.css';
import { Carousel, Jumbotron } from 'react-bootstrap'
import Img01 from '../image/post-blog-estudio-roxo-o-sucesso-das-barbearias-2-4-2.jpg';
import Img02 from '../image/post-blog-estudio-roxo-o-sucesso-das-barbearias-2-4-2.jpg';
import Img03 from '../image/post-blog-estudio-roxo-o-sucesso-das-barbearias-2-4-2.jpg';
import GlowingButton from './GlowingButton.js';

export default class Carrossel extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-carrosel">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Img01} alt="Imagem barbearia" />
                            <Carousel.Caption>
                                <GlowingButton value="teste" />
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Img02} alt="Imagem barbearia" />
                            <Carousel.Caption>
                                <GlowingButton value="teste" />
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Img03} alt="Imagem barbearia" />
                            <Carousel.Caption>
                                <GlowingButton value="teste" />
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Jumbotron>
                <Jumbotron id="divisao-carrosel" />
            </>
        );
    }
}