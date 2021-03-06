import React from 'react';
import Perfil from '../assets/img/Perfil.jpg'
import Layout from '../components/Layout';
import '../App.css'
const PerfilCo = () => {
    return (
        <div className='container'>
            <div>
                <h1>.</h1>
                <Layout />
                <div className='profile-container'>
                    <img src={Perfil} className='asdasd' alt='Logo' />
                </div>
                <h1 className='display-4'>Cristian Usme</h1>
                <h2 className='sos'>Comprador</h2>
                <h4 className='sos'>jdfgcuc@gmail.com</h4>

                <button className='dnd' type="button"  data-toggle="modal" data-target="#exampleModal">
                    Cerrar sesión</button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">¿Seguro que desea cerrar sesión?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="secundario" data-dismiss="modal">Cerrar</button>
                                <a href="/"> <button type="button" class="btn btn-primary">Continuar</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>.</h1>
        </div>
    )
}

export default PerfilCo;