import React from 'react';
//import '../App.css';
import Layout from '../components/Layout';
import Icono1 from '../components/validacion.png';
import Icono2 from '../components/preparacion.png';
import Icono3 from '../components/entregado.png';

class EstadoComprador extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    <Layout />
                    <h4>.</h4>
                    <div className="letra d-block">
                        <div class="col-12 d-flex justify-content-center">
                            <h1 class="display-5">Estado de las entregas</h1>
                        </div>
                    <div className="container">
                            <table className="table col-1"><tr>
                                <td><img src={Icono1} width="100px" ></img><h4>Validación</h4></td>
                                <td><img src={Icono2} width="100px"/><h4>Preparación</h4></td>
                                <td><img src={Icono3} width="100px" ></img><h4>Entregado</h4></td>
                            </tr></table>
                        </div>
                        </div>
                </div>
                
            </div>
        );
    }
}
export default EstadoComprador;