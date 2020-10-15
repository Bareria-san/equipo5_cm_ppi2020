import React, { Component } from 'react';
import '../App.css';
import Layout from '../components/Layout'; 
import Card from '../components/cardpro';
import Cards from '../data/Cards.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {data: Cards};
  }
 render (){
  return (
    <div className="container-fluid">
      <div className="row">
      <h1>.</h1>
    <Layout/>
    <div className="col-12 d-flex justify-content-center">
      <h1 className="display-3">Catálogo</h1>
    </div>
      <Card data={this.state.data} />
    </div>
    <h1>.</h1>
    </div>
  );
 }
}


export default Home;