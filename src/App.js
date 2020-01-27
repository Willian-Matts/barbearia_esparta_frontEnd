import React, { Component } from 'react';

import MenuNav from './components/MenuNav';
import DivInicial from './components/DivInicial'

class App extends Component {

  render() {
    return (
      <>
        <MenuNav />
        <DivInicial />
      </>
    );
  }
}

export default App;
