import React from 'react';
import './App.css';
import Navbaar from './components/navbaar';
import Futer from './components/futer';
import Tarjetaperfume from './components/tarjetaperfume'
import Tarjetaperfume1 from './components/tarjetaperfume1'


function App() {
  return (
    <div className="Container">
      <header className="App-header"><div class="fixed-top">
        <Navbaar />
      </div>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React</a>
      </header>
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="list-group list-group-horizontal">
        <Tarjetaperfume />
        <Tarjetaperfume1 />
      </div>
      <div>
        <footer className="Container"><div class="fixed-bottom">
          <Futer />
        </div>
        </footer>
      </div>
    </div>

  );
}

export default App;
