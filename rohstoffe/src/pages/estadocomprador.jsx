import React from 'react';
import '../App.css';
import Layout from '../components/Layout';
import Icono1 from '../components/validacion.png';
import Icono2 from '../components/preparacion.png';
import Icono3 from '../components/entregado.png';

class EstadoComprador extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1>.</h1>
                    <Layout />
                    <div className="letra">
                        <div class="col-12 d-flex justify-content-center">
                            <h1 class="display-3">Estado de las entregas</h1>
                        </div>

                        <div className="iconos">
                            <table border="0" width="auto" height="auto"><tr>
                                <td><center><img src={Icono1} className="icono col-3" width="auto" alt="Validacion" border="0"></img></center></td>
                                <td><center><img src={Icono2} className="icono col-3" width="auto" alt="Preparacion" border="0"></img></center></td>
                                <td><center><img src={Icono3} className="icono col-3" width="auto" alt="Entrega" border="0"></img></center></td>
                            </tr></table>
                        </div>

                        <div className="names">
                            <table border="0" width="auto" height="auto"><tr>
                                <td><center><h3>Validación</h3></center></td>
                                <td><center><h3>Preparación</h3></center></td>
                                <td><center><h3>Entregado</h3></center></td>
                            </tr></table>

                        </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default EstadoComprador;