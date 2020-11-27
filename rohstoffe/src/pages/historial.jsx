import React from 'react';
import  '../App.css'
import Layout from '../components/Layout';


const Historial = () => {
    return (
        
        <div className = 'contenedores'>
            <Layout/> 
            
            <div className='col-12 d-flex justify-content-center'>
            <h1 className='display-5'>Historial de pedidos</h1>
            </div>
        <div class="accordion" id="accordionExample">
            <div className= 'onlycards'>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Calvin Klein
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
          Precio:
          <button className= 'volveracomprar'>
           Volver a comprar
       </button>
       <button className='precios'>89.990</button>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Lacoste Red
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
          Precio:
      <button className= 'volveracomprar'>
           Volver a comprar
       </button>
       <button className='precios'>89.990</button>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Calvin Klein
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
          Precio:
      <button className= 'volveracomprar'>
           Volver a comprar
       </button>
       <button className='precios'>89.990</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    )

}
export default Historial;