import React from 'react';
import Perfil from '../assets/img/Perfil.jpg'
import Layout2 from '../components/Layout2';
import '../App.css'
import Certificado from '../assets/img/Certificado.jpg'
const PerfilEm = () => {
    return (
        <div className='container'>
            <div>
                <h1>.</h1>
                <Layout2 />
                <div className='profile-container'>
                    <img src={Perfil} className='asdasd' alt='Logo' />
                </div>
                <h1 className='display-5'>Lili Perfumeria</h1>
                <h2 className='sos'>Carlos Ferrer</h2>
                <h4 className='sos'>Liliperfu@gmial.com</h4>
                <h4 className='sos'>4444444</h4>
                <h4 className='sos'>Calle 94 #30-1, Medellín</h4>
                <h4 className='sos'>Certificado de autenticidad:</h4>
                <div className='cont'>
                    <img src={Certificado} className='asdasd' alt='Logo' />
                </div>

                <button className='dna' type="button" data-toggle="modal" data-target="#exampleModal">
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
                <h1>.</h1>
            </div>
            

        </div>
    )
}

export default PerfilEm;