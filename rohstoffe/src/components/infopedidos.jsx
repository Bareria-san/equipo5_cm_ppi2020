import React, { Component } from 'react';

export default class Infopedidoss extends Component {
    render() {
        return (
            <>
                {this.props.data.map((element) => (
                    <table class="table table-striped bg-light">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Factura</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" key={element.id}>{element.id}</th>
                                <td>{element.direccion}</td>
                                <td><div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        estado</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="/d">Validado</a>
                                        <a class="dropdown-item" href="/d">Preparado</a>
                                        <a class="dropdown-item" href="/d">Entrgado</a>
                                    </div>
                                </div></td>
                                <td>
                                    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content='Precio: 10000, producto: LacosteRed, comprador: Juan Bodoque'>
                                        Factura {element.id}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </>
        );
    }
}