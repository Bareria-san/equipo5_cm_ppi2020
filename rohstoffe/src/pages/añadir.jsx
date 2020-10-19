import Layout2 from '../components/Layout2'
import React, { Component } from 'react';
import '../App.css';

class Añadir extends Component {
    render() {
        return (
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

                                <button type="submit" class="btn btn-secondary">Añadir</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Añadir;