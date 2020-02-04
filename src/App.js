import React, { Component } from 'react';

import './css/app.css';
import MenuNav from './components/MenuNav';
import DivInicial from './components/DivInicial';
import Divisoria from './components/Divisoria';
import Rodape from './components/Rodape';

class App extends Component {

  render() {
    return (
      <>
        <DivInicial />
        <Divisoria />
        <Rodape />
        <MenuNav />
      </>
    );
  }
}

export default App;
