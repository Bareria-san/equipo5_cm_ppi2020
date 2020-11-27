import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import Logo from '../assets/img/Logo.png';
import Title from '../Login/components/Title/Title'
import Label from '../Login/components/Label/Label'
import Input from '../Login/components/Input/Input'


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        }else {
                setPassword(value);
            }
            
            };

    function handleSumit() {
        let account = { user, password }
        if (account) {
            console.log('account:', account)
        }
    };
    function handleCancel() {
        let cancel = 'Cancelando operación'
        if (cancel) {
            console.log(cancel)
        }
    };

    return (
        <div className='login-container'>
            <img src={Logo} className='Logo' alt='Logo' />
            <Title text='Inicia sesión' />
            <Label text='Nombre de usuario*' />
            <Input
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
            />
            <Label text='Contraseña*' />
            <Input
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Digite su contraseña'
                }}
                handleChange={handleChange}
            />
            <button onClick={handleSumit} type="button" className="Ok" data-toggle="modal" data-target="#exampleModal">
                                    Iniciar sesión</button>


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">Ha iniciado sesión correctamente

                                            </div>
                                            <div class="modal-footer">
                                               <a href="/home"> <button type="button" class="btn btn-primary">Continuar</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
            <Link to= '/'>
            <button onClick={handleCancel} className='cancel'>
                Cancelar
            </button>
            </Link>
            <Label text='¿Aún no tiene cuenta?'/>
            <Link to= '/signup'>
            <button className= 'here'>Registrate aquí</button>
            </Link>
            <a>Campos obligatorios marcados con *</a>
        </div>
    )

}

export default Login;