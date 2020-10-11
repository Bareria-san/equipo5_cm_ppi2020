import React, { Component } from 'react';
import '../App.css';
import Layout from '../components/Layout'; 
import Card from '../components/cardpro';
import Cards from '../data/Cards.json';

class Inicio extends Component {
  constructor() {
    super();
    this.state = {data: Cards};
  }
 render (){
  return (
    <div >
    <Layout/>
      <div className="row">
    <Card data={this.state.data} />
    </div>
    </div>
  );
 }
}


export default Inicio;