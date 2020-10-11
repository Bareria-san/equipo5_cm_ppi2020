import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';
import Todospaca from "../pages/todospaca";


export default function Rutas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Inicio}/>
        <Route exact path='/aca' component = {Todospaca}/>
      </Switch>
    </BrowserRouter>
  );
}
