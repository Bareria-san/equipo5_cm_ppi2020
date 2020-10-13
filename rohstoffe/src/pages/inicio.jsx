import React from 'react';
import '../App.css';
import logo from '../components/logom.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="logo" alt="logo" />

        <div class="main-container">
      <div class="first-container share">
        <h1><span id="one">Bi</span><span>en</span><span>ve</span><span>ni</span><span>dos</span></h1>
      </div>
      <div class="second-container share">
        <h1><span>Elige</span><span>una</span><span>opción</span><span>para</span><span> continuar</span></h1>
      </div>
    </div>
    
        <div className="App-buttons">
          <button type="button" class="btn btn-tcc btn-lg btn-color btn-bg-color btn-sm col-xs-2 btn-tcc-spacing">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Registrarse
          </button>
          <button type="button" class="btn btn-tcc btn-color btn-bg-color btn-sm col-xs-2 btn-tcc-spacing" href=''>
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Iniciar Sesión
          </button>
        </div>

      </header>

    </div>
  );
}

export default App;
