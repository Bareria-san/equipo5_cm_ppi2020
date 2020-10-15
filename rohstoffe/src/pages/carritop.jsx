import React from 'react';
import '../App.css';
import Layout2 from '../components/Layout2'

class Carritop extends React.Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                    <Layout2 />
                    
                        <div className="col-4 justify-content-center" id="Bloque_inicio">
                            <h1 className="text-center mt-5" id="Texto_inicio">Datos de envío</h1>
                            <br />
                            <form >
                            <div className="form-group">
                                    <label className="inputEmail">Nombre Completo</label>
                                    <input
                                        type="direction"
                                        id="inputEmail"
                                        className="form-control"
                                        required
                                        placeholder="Nombre Completo"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="inputEmail">Dirección</label>
                                    <input
                                        type="direction"
                                        id="inputEmail"
                                        className="form-control"
                                        required
                                        placeholder="Dirección"
                                    />
                                </div>
                                <div className="form-group ">
                                    <label className="formGroupExampleInput">Monto</label>
                                    <input
                                        type="cash"
                                        name="contrasena"
                                        id="inputPassword"
                                        className="form-control"
                                        required
                                        placeholder="Monto"
                                    />
                                </div>
                                <button className=" btn btn-secondary" type="submit" id="btn_direccion">
                                    <strong>Aceptar compra</strong>
                                </button>
                                <button className=" btn btn-secondary" type="submit" id="btn_monto">
                                    <strong>Seguir Comprando</strong>
                                </button>
                            </form>
                            <br />
                            <br />
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
        );
    }
}

export default Carritop;