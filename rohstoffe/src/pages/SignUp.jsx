import React, {useState} from 'react';
import Title from '../Login/components/Title/Title'
import Logo from '../assets/img/Logo.png'
import './SignUp.css' 
import Label from '../Login/components/Label/Label';
import Input from '../Login/components/Input/Input';
//import Label from './components/Label/Label'
const SignUp  = () => {

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
        <Title text='Registrate' />
        <Label text= 'Nombre' />
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su usuario'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Apellido'/> 
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su usuario'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Correo electronico' />
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su correo'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Contraseña' />
        <Input 
        attribute={{
            id: 'contraseña',
            name: 'usuario',
            type: 'password',
            placeholder: 'Digite su contraseña'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Confirme su contraseña' />
        <Input 
        attribute={{
            id: 'Confirm-contraseña',
            name: 'Rcontraseña',
            type: 'password',
            placeholder: 'Digite nuevamente su contraseña'
        }}
        handleChange={handleChange}
        />
    </div>
    )
}

export default SignUp;