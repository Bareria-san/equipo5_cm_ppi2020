import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Insigniapages from '../pages/insigniaPages';
import Carrito from '../pages/carrito';
import Home from '../pages/Home';
import Todospaca from "../pages/todospaca";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Carrito} />
                <Route exact path='/' component={Home} />
                <Route exact path='/aca' component={Todospaca} />
                <Route exact path='/insigniapages' component={Insigniapages} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;