import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Insigniapages from '../pages/insigniaPages';
import Carrito from '../pages/carrito';
import Home from '../pages/Home';
import Favoritos from '../pages/favoritos';
import Pedidos from '../pages/pedidos';
import Todospaca from "../pages/todospaca";
import Estado from "../pages/estado";
import Productos from "../pages/productos";
import Añadir from '../pages/añadir';
import EstadoComprador from '../pages/estadocomprador';
import App from '../pages/inicio';
import Carritop from '../pages/carritop';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Historial from '../pages/historial';
import Registroem from '../pages/registroem';
import PerfilCo from '../pages/perfilcomprador';
import PerfilEm from '../pages/perfilem'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/registroem' component={Registroem}/>
                <Route exact path='/' component={App} />
                <Route exact path = '/perfilco' component={PerfilCo}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route exact path='/login' component = {Login} />
                <Route exact path='/carrito' component={Carrito} />
                <Route exact path='/Estado' component={Estado} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/aca' component={Todospaca} />
                <Route exact path='/insigniapages' component={Insigniapages} />
                <Route exact path='/productos' component={Productos} />
                <Route exact path='/añadir' component={Añadir} />
                <Route exact path='/estadocomprador' component={EstadoComprador} />
                <Route exact path='/favoritos' component={Favoritos} />
                <Route exact path='/pedidos' component={Pedidos} />
                <Route exact path='/carritop' component={Carritop} />
                <Route exact path='/historial' component={Historial} />
                <Route exact path='/PerfilEm' component={PerfilEm} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;