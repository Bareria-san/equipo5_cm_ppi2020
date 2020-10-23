import React from 'react';
import '../App.css';
import Layout from '../components/Layout';
import Icono1 from '../components/validacion.png';
import Icono2 from '../components/preparacion.png';
import Icono3 from '../components/entregado.png';

class Estado extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1>.</h1>
                    <Layout />
                    <div className="letra">
                        <div class="row justify-content-center justify-content-md-start">
                            <h1 class="display-5">Estado del pedido</h1>
                        </div>

                        <div className="iconos">
                            <table border="0" width="900px" height="auto"><tr>
                                <td><center><img src={Icono1} className="icono" alt="Validacion" border="0"></img></center></td>
                                <td><center><img src={Icono2} className="icono" alt="Preparacion" border="0"></img></center></td>
                                <td><center><img src={Icono3} className="icono" alt="Entrega" border="0"></img></center></td>
                            </tr></table>
                        </div>

                        <div className="names">
                            <table border="0" width="900px" height="auto"><tr>
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
export default Estado;