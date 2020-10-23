import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <>
        {this.props.data.map((element) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={element.id}>
            <div className="card m-4" style={{ width: '18rem' }}>
              <img className="card-img-top" src={element.img} alt="el perfume" />
              <div className="card-body">
                <h5 className="card-title">{element.nombre}</h5>
                <h5 className="card-stock">{element.Stock}</h5>
                <p className="card-text">{element.descrip}</p>
                <button class="btn btn-success" onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'Fav' : 'No fav'}
                </button>
              </div>
              <a href="https://getbootstrap.com/docs/4.5/components/card/" class="btn btn-primary">Añadir al kart</a>
            </div>
          </div>
        ))}
      </>
    );
  }
}
