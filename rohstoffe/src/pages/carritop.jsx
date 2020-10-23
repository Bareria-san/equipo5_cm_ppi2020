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
                        </form>

                        <button type="button" id="btn_monto" class="btn btn-secondary ml-5 mt-3" data-toggle="modal" data-target="#exampleModal">
                            Aceptar Compra</button>

                            <button type="button" id="btn_direccion" class="btn btn-secondary ml-5 mt-3" data-toggle="modal" data-target="#exampleModal">
                            Seguir Comprando</button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">¡Envío Guardado!</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">Los datos de envío han sido guardados satisfactoriamente

                                            </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <a href="/carrito"> <button type="button" class="btn btn-primary">Continuar</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carritop;