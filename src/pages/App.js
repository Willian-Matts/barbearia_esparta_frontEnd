import React, { Component, Fragment } from 'react';
import Teste from './teste';
import Routes from '../routes.js';

import '../css/app.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Teste></Teste>
        <Teste></Teste>
      </Fragment>

      // <Routes />
    );
  }
}

export default App;
