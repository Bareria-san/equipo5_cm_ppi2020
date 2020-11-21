import Layout2 from '../components/Layout2'
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Añadir extends Component {
    constructor(props) {
        super(props);
        axios.post('https://backend-rohstoffe.herokuapp.com/api/productos', 
        this.state = {
            nombre_producto: '',
            stock: '',
            valor_unidad: ''
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({producto: event.target.nombre_producto});
        this.setState({cantidad: event.target.stock});
        this.setState({valor: event.target.valor_producto});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.nombre_producto);
        event.preventDefault();
      }
    render() {
        return (
            <body>
                <div className="container-fluid">
                    <div className="row">
                        <h1>.</h1>
                        <Layout2 />
                        <div className="col-12 d-flex justify-content-center">
                            <h1 className="display-5">Añadir productos</h1>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="form">
                                <form onSubmit={this.handleSubmit}> 
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Nombre Producto</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Lacoste Red" producto={this.state.nombre_producto}></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Stock</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="40 Unidades" cantidad={this.state.stock}></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Valor Unidad</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="$30.000" valor={this.state.valor_unidad}></input>
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