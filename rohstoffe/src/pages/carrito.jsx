import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Layout from '../components/Layout';

function Carrito() {
    const [baseDeDatos, setBaseDeDatos] = useState([]);
    const [conteo, setConteo] = useState(0);
    //let baseDeDatos=[];
    function informacion() {
        if (conteo == 0) {
            setConteo(1);
            axios.get('https://backend-rohstoffe.herokuapp.com/api/productos')
                .then(function ({ data }) {
                    // se ejecuta siempre que la llamada sea exitosa
                    //baseDeDatos = data;
                    
                        setBaseDeDatos(data);
                        console.log(data);
                        
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

    }
    useEffect(function () {
        informacion();
    }, [baseDeDatos])
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

    // Funciones
    function renderItems() {

        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');

            miNodo.classList.add('card', 'col-sm-4');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre_producto'];
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info['imagen_producto']);
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$' + info['valor_unidad'];
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-secondary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id_producto']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            if ($items) {
                $items.appendChild(miNodo);
            }

        }
    }



    function anyadirCarrito() {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();
    }

    function renderizarCarrito() {
        // Vaciamos todo
        $carrito.textContent = '';
        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id_producto'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre_producto']} - $ ${miItem[0]['valor_unidad']}`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        console.log()
        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('item');
        // Borramos todos los productos
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id_producto'] == item;
            });
            total = total + miItem[0]['valor_unidad'];
        }

        // Renderizamos el precio 
        $total.textContent = total;
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
    }
    if ($botonVaciar) {

        // Eventos
        $botonVaciar.addEventListener('click', vaciarCarrito);

    }
    // Inicio
    renderItems();

    return (
        <div className="container-fluid">
            <div className="row">
                <Layout />
                <div className="letra">
                    <h4>.</h4>
                    <div class="row justify-content-center justify-content-md-start">
                        <h1 class="display-5">Carrito de compra</h1>
                    </div>
                </div>
                <main id="items" class="col-sm-8 row"></main>

                <aside class="col-sm-5">
                    <h2>Facturación</h2>

                    <ul id="carrito" class="list-group"></ul>
                    <p class="text-right">Total: $ <span id="total"></span></p>

                    <div className="col-13 d-flex justify-content-center">

                        <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
                        <button id="boton-continuar" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                            Continuar</button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">¿Continuar?</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">¿Está seguro de que desea continuar?

                                            </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <a href="/carritop"> <button type="button" class="btn btn-primary">Continuar</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <h1>.</h1>
            </div>
        </div>


    );
}
export default Carrito;
