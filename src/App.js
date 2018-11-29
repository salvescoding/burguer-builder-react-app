import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <BurguerBuilder />
        </Layout>
      </Aux>
    );
  }
}

export default App;
