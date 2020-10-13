import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rutas from './routes/routes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
