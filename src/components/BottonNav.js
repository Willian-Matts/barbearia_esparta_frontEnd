import React, { Component } from 'react';
import '../css/ButtonNav.css'
import { Button } from 'react-bootstrap'

export default function ButtonNav(props) {
    return (
        <Button className="button-nav" variant="outline-light">
            <p>{props.name}</p>
        </Button>
    );
}
