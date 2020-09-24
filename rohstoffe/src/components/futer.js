import React, {Component} from 'react';

class Futer extends Component {
    render(){
        return(
            <ul class="nav justify-content-center bg-light">
          <li class="nav-item float-left ">
            <a class="nav-link active text-dark" href="https://getbootstrap.com/docs/4.5/components/navs/">Favoritos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="https://getbootstrap.com/docs/4.5/components/navs/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link float-right text-dark" href="https://getbootstrap.com/docs/4.5/components/navs/">Carrito</a>
          </li>
        </ul>
        );
    }

}

export default Futer;