import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Insigniapages from '../pages/insigniaPages';
import Carrito from '../pages/carrito';
import Home from '../pages/Home';
import Todospaca from "../pages/todospaca";
import Estado from "../pages/estado";
import Productos from "../pages/productos";
import Añadir from '../pages/añadir';
import EstadoComprador from '../pages/estadocomprador';
import App from '../pages/inicio';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/carrito' component={Carrito} />
                <Route exact path='/Estado' component={Estado} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/aca' component={Todospaca} />
                <Route exact path='/insigniapages' component={Insigniapages} />
                <Route exact path='/productos' component={Productos} />
                <Route exact path='/añadir' component={Añadir} />
                <Route exact path='/estadocomprador' component={EstadoComprador} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;