import React, { Component } from "react";
import '../App.css';

export default class Cardvendedor extends Component {
  render() {
    return (
      <>
        {this.props.data.map((element) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={element.id}>
            <div className="card m-4"style={{width: '18rem'}}>
            <img className="card-img-top" src= {element.img} alt="el perfume"/>
              <div className="card-body">
                <h5 className="card-title">{element.nombre}</h5>
                <h5 className="card-stock">{element.Stock}</h5>
                <p className="card-text">{element.descrip}</p>
              </div>
            </div>
          </div>
              ))}
      </>
    );
  }
}
