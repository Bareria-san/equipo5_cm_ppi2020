import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Futer extends Component {
  render() {
    return (
      <footer className="Container"><div class="fixed-bottom">
        <ul class="nav justify-content-center bg-light">
          <li class="nav-item float-left ">
            <a class="nav-link active text-dark" href="https://getbootstrap.com/docs/4.5/components/navs/">Favoritos</a>
          </li>
          <li class="nav-item">
            <h7 class="nav-link text-dark" >
              <Link to="/" className="text-dark">
              Inicio
            </Link>
            </h7>
          </li>
          <li class="nav-item">
          <h7 class="nav-link text-dark" >
              <Link to="/aca" className="text-dark">
              Carrito
            </Link>
            </h7>
          </li>
        </ul>
      </div>
      </footer>

    );
  }

}

export default Futer;