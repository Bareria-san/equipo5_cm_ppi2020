import React, { useState } from 'react';
import Title from '../Login/components/Title/Title'
import Logo from '../assets/img/Logo.png'
import '../Login/SignUp.css' 
import Label from '../Login/components/Label/Label';
import Input from '../Login/components/Input/Input';
import {Link} from 'react-router-dom';

const Registroem = () => {
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
    <div className = 'register-container'>
        <img src={Logo} className='Logo' alt='Logo' />
        <Title text='Registra tu empresa' />
        <Label text= 'Nombre de la empresa*' />
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Nombre de empresa'
        }}
        handleChange={handleChange}
        />

        <Label text= 'Correo empresarial*' />
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Digite el correo empresarial'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Contraseña*' />
        <Input 
        attribute={{
            id: 'contraseña',
            name: 'usuario',
            type: 'password',
            placeholder: 'Digite su contraseña'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Confirme su contraseña*' />
        <Input 
        attribute={{
            id: 'Confirm-contraseña',
            name: 'Rcontraseña',
            type: 'password',
            placeholder: 'Digite nuevamente su contraseña'
        }}
        handleChange={handleChange}
        />
        <Link to='/home'>
        <button onClick={handleSumit} className='Ok'>
                Registrarse
        </button>
        </Link>
        <Link to= '/'>
        <button onClick={handleCancel} className= 'cancel'>
                Cancelar
        </button>
        </Link>
        <a>Campos obligatorios marcados con *</a>
    </div>

    )
}

export default Registroem;