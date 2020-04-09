import React from 'react';
import '../css/GlowingButton.css'
import { Button } from 'react-bootstrap'

export default function GlowingButton(props) {
    return (
        <Button className="glowing" variant="outline-light">
            <img className="social" src={props.value} alt={props.alt}/>
            {/* <p>{props.value}</p> */}
        </Button>
    );
}
