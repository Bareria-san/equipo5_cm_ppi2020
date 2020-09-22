import React from 'react';
import './App.css';
import logo from './components/logom.png';
import './App copy'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="logo" alt="logo" />
        <div className="App-buttons">
          <button type="button" class="btn btn-tcc btn-lg btn-color btn-bg-color btn-sm col-xs-2 btn-tcc-spacing">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Registrarse
          </button>
          <button type="button" class="btn btn-tcc btn-color btn-bg-color btn-sm col-xs-2 btn-tcc-spacing" href='./App copy.js'>
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Iniciar Sesión
          </button>
        </div>

      </header>

    </div>
  );
}

export default App;
