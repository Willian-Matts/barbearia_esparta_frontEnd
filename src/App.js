import React, { Component } from 'react';

import './css/app.css';
import MenuNav from './components/MenuNav';
import DivInicial from './components/DivInicial';
import Divisoria from './components/Divisoria';
import Rodape from './components/Rodape';
import Mapa from './components/Mapa';

class App extends Component {

  render() {
    return (
      <>
        <DivInicial />
        <Divisoria />
        <Mapa />
        <Rodape />
        <MenuNav />
      </>
    );
  }
}

export default App;
