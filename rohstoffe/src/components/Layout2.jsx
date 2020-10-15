import NavbarCliente from './navbarcliente';
import React from 'react'
import FooterCliente from './FooterCliente';

function Layout2(props) {
    return (
      <React.Fragment>
      <NavbarCliente />
        {props.children}
      <FooterCliente/>
        {props.children}
      </React.Fragment>
    )
  }
  
  export default Layout2;