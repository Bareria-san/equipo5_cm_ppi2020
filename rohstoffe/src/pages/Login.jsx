import React, { useState } from 'react';
import './Login.css'
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
        } else {
            setPassword(value)
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
            <Label text='Nombre de usuario' />
            <Input
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
            />
            <Label text='Contraseña' />
            <Input
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
            />
            <button onClick={handleSumit} className='Ok'>
                Ingresar
            </button>
            <button onClick={handleCancel} className='cancel'>
                Cancelar
            </button>
            <Label text='¿Aún no tiene cuenta?'/>
            <button className= 'here'>Registrate aquí</button>
        </div>
    )

}

export default Login;