import Layout2 from '../components/Layout2'
import React, { Component } from 'react';
import '../App.css';
import Cardvendedor from '../components/cardvendedor';
import Cards from '../data/Cards2.json';

class Productos extends Component {
  constructor() {
    super();
    this.state = {data: Cards};
  }
  render() {
    return (
          <div className="container-fluid">
      <div className="row">
      <h1>.</h1>
    <Layout2/>
    <div className="col-12 d-flex justify-content-center">
      <h1 className="display-3">Productos</h1>
    </div>
    
    <Cardvendedor data={this.state.data} />
    
     
    </div>
    <h1>.</h1>
    </div>
  );
 }
}

export default Productos;