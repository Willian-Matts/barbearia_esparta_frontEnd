import React from 'react';
import '../css/GlowingButton.css'
import { Button } from 'react-bootstrap'

export default function GlowingButton(props) {
    return (
        <Button className="Glowing" variant="outline-light">
            <p>{props.value}</p>
        </Button>
    );
}
