import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../pages/inicio';
import Insigniapages from '../pages/insigniaPages';
import Carrito from '../pages/carrito';

function Aplicacion() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Carrito} />
                <Route exact path='/' component={App} />
                <Route exact path='/insigniapages' component={Insigniapages} />
            </Switch>
        </BrowserRouter>
    );
}

export default Aplicacion;