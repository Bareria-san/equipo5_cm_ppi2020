import Layout2 from '../components/Layout2'
import React, { Component } from 'react';
import '../App.css';

class Añadir extends Component {
    render() {
        return (
            <body>
                <div className="container-fluid">
                    <div className="row">
                        <h1>.</h1>
                        <Layout2 />
                        <div className="col-12 d-flex justify-content-center">
                            <h1 className="display-3">Añadir productos</h1>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="form">
                                <form>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Nombre Producto</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Lacoste Red"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Stock</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="40 Unidades"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Valor Unidad</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="$30.000"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Imagen del producto</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                                    </div>
                                </form>

                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Añadir</button>


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">¡Producto Añadido!</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">El producto ha sido añadido satisfactoriamente

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                               <a href="/productos"> <button type="button" class="btn btn-primary">Continuar</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Añadir;