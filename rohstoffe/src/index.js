import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routers/Routes';


ReactDOM.render(
  <React.StrictMode>

    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();
