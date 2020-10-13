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
    <Layout/>
    <h1 class="display-3 col-12 text-dark bg-info">Catálogo</h1>
      <Card data={this.state.data} />
    </div>
    </div>
  );
 }
}


export default Home;