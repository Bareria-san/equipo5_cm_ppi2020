import React from 'react'
import Navbaar from './navbaar'
import Futer from './futer'

function Layout(props) {
  return (
    <React.Fragment>
    <Navbaar />
      {props.children}
    <Futer/>
      {props.children}
    </React.Fragment>
  )
}

export default Layout;