import React, { Component } from 'react';

import '../css/Rodape.css';
import logoVetor from '../image/logo/Logo-3.svg';
import instagram from '../image/instagram.png';
import whatsapp from '../image/whatsapp.png';
import { Jumbotron, Container, Nav, Button } from 'react-bootstrap'
//import Glowingbutton from './GlowingButton';


export default class Rodape extends Component {
    render() {
        return (
            <>
                <Jumbotron id="box-rodape">
                    <Container id="box-redes-sociais">
                        {/* redes sociais  */}
                        {/*<Glowingbutton value={instagran} alt="teste"/>*/}
                        <Button id="button_instagram" href="https://www.instagram.com/ronaldinho">  
                            <img src={instagram} alt="Instagram"/> 
                            @barbeariaesparta                
                        </Button>
                        
                        <Button id="button_whatsapp" href="https://wa.me/5562984137094?text=sua%20mensagem">  
                            <img src={whatsapp} alt="Whatsapp"/> 
                            (62) 9 8413-7094               
                        </Button>
                        <p> Avenida Mandassaia, Qd x Lt y, Setor Bouganvile, Rubiataba, GO</p> {/*Temporario. arrumar isso aqui depois XD*/}                        
                        
                    </Container>
                    <Container id="box-Logo-rodape">
                        <Nav.Link href="#box-carrosel">
                            <img src={logoVetor} alt="Logo Barbearia" />
                        </Nav.Link>                        
                    </Container>
                </Jumbotron>
            </>
        );
    }
}