import React, { Component } from 'react';

import '../css/Rodape.css';
import logoVetor from '../image/logo/Logo-3.svg';
//import instagran from '../image/logo/Logo-3.svg';
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
                        <Button href="https://www.instagram.com/ronaldinho">                            
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