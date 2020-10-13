import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Aplicacion from './routers/Aplicacion';


ReactDOM.render(
  <React.StrictMode>

    <Aplicacion/>
  </React.StrictMode>,
  document.getElementById('root')
);
 

serviceWorker.unregister();
