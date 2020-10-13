import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Todospaca from "../pages/todospaca";


export default function Rutas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/aca' component = {Todospaca}/>
      </Switch>
    </BrowserRouter>
  );
}
