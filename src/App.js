import React, { Component } from 'react';

import './css/app.css';
import MenuNav from './components/MenuNav';
import DivInicial from './components/DivInicial';
import DivInfo from './components/DivInfo';

import { Jumbotron } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <>
        <Jumbotron id="fundo-inicio">
          <MenuNav />
          <DivInicial />
        </Jumbotron>
        <DivInfo />
      </>
    );
  }
}

export default App;
