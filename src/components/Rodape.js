import React, { Component } from 'react';

import '../css/Rodape.css';
import logoVetor from '../image/logo/Logo-3.svg';
import instagram from '../image/instagram.png';
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
                            <img src={instagram} alt="Instagram" />                    
                        </Button>
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