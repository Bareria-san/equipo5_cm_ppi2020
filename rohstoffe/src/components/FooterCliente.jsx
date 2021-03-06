import React, { Component } from 'react';
import { Link } from "react-router-dom";


class FooterCliente extends Component {
  render() {
    return (
      <footer className="Container"><div class="fixed-bottom">
        <ul class="nav justify-content-center bg-light">
        <li class="nav-item">
              <h7 class="nav-link text-dark" >
                <Link to="/añadir" className="text-dark">
                  Añadir
            </Link>
              </h7>
            </li>
            <li class="nav-item">
              <h7 class="nav-link text-dark" >
                <Link to="/productos" className="text-dark">
                  Productos
            </Link>
              </h7>
            </li>
            <li class="nav-item">
              <h7 class="nav-link text-dark" >
                <Link to="/pedidos" className="text-dark">
                  Pedidos
            </Link>
              </h7>
            </li>
        </ul>
      </div>
      </footer>

    );
  }

}

export default FooterCliente;