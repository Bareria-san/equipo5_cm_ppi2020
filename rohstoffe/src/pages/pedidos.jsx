import React, { Component } from 'react';
import '../App.css';
import Layout2 from '../components/Layout2'; 
import Infopedidoss from '../components/infopedidos'
import Infopedidos from '../data/infopedidos.json';

export default class Pedidos extends Component {
  constructor() {
    super();
    this.state = {data: Infopedidos};
  }
 render (){
  return (
    <div className="container-fluid">
      <div className="row">
      <h1>.</h1>
    <Layout2/>
    <div className="col-12 d-flex justify-content-center">
      <h1 className="display-5">Pedidos de tus clientes</h1>
    </div>
      <Infopedidoss data={this.state.data} />
    </div>
    <h1>.</h1>
    </div>
  );
 }
}
