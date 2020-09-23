import React from 'react';
import logo from './imagenes/perfume-calvin.jpg';
import './App.css';
import bm from './imagenes/Bm.png';

function App() {
  return (
    <div className="nav-false">
      <img src={bm} className="nav-false" alt="logo" />
      <p>
      Favoritos
      </p>

      <div class="Texto-desk">
        <p class="desk-title">
        </p>
      </div>

      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <div class="Texto-desk">
            <p class="desk-title">
              Pachuli Calvin clein.
        </p>
          </div>
          <a
            className="App-link"
            href="https://marvelapp.com/prototype/f1336ah/screen/72156131"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          <div className="nav-false">
      <img src={bm} className="nav-false" alt="logo" />


    </div>
    </header>
  </div>
</div>
  );
}

export default App;
