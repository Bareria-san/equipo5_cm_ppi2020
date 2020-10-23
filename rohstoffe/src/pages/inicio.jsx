import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../components/logom.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="logo" alt="logo" />

        <div class="main-container">
          <div class="first-container share">
            <h1><span id="one">Bi</span><span>en</span><span>ve</span><span>ni</span><span>dos</span></h1>
          </div>
          <div class="second-container share">
            <h1><span>Elige</span><span>una</span><span>opción</span><span>para</span><span> continuar</span></h1>
          </div>
        </div>



      </header>
      <div className="App-buttons d-inline-block">
        
            <button className='dna' class="btn btn-tcc btn-color btn-bg-color btn-sm col-xs-2 btn-tcc-spacing m-2" type="button" data-toggle="modal" data-target="#exampleModal">
                    Registrarse</button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Seleccione el tipo de registro</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-footer">
                               <a href="/registroem"> <button type="button" className="secundario" data-dismiss="modal">Cancelar</button></a>
                               <div className='btnregistro'>
                               <a href="/registroem"><button type="button" class='btn btn-primary'>Como empresa</button></a></div><a href="/signup"> <button type="button" class="btn btn-primary">Como comprador</button></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
        

        <Link to='/login' className='text-white'>
          <button type="button" class="btn btn-tcc btn-color btn-bg-color btn-sm col-xs-2 btn-tcc-spacing m-2" href=''>
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Iniciar sesión
            </button>
        </Link>

      </div>
    </div>
  );
}

export default App;
