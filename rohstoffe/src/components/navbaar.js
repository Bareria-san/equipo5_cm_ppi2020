import React, {Component} from 'react';


class Navbaar extends Component {
    render(){
        return(
            <nav className ="navbar navbar-expand-lg navbar-light bg-light">
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
            
            <span class="navbar-brand mb-0 h1"><a class="navbar-brand" href="https://getbootstrap.com/docs/4.5/components/navs/">
              <img src="https://raw.githubusercontent.com/Bareria-san/equipo5_cm_ppi2020/master/imgs_media/logom.png" width="30" height="30" alt="" loading="lazy" />
            </a>Roshtoffe</span>
            {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="https://getbootstrap.com/docs/4.5/components/navs/">Inicio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://getbootstrap.com/docs/4.5/components/navs/">Favoritos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://getbootstrap.com/docs/4.5/components/navs/">Carrito</a>
              </li>
            </ul> */}
            <form class="form-inline my-1 my-lg-0 ml-1">
              <input class="form-control mr-sm-1" type="search" placeholder="Buscar" aria-label="Search"/>
              <button class="btn btn-outline-success my-1 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>
        </nav>
        );
    }
}
export default Navbaar;