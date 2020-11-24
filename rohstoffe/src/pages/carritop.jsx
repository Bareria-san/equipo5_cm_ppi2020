import React from "react";
import "../App.css";
import Layout2 from "../components/Layout2";


class Carritop extends React.Component {
    constructor(props){
        super(props);
    
        this.state={
            nombre: '',
            numero: '',
            fields: {},
            errors: {}
        };
    
       this.handleChangeInput = this.handleChangeInput.bind(this);
       this.cambioNumero = this.cambioNumero.bind(this);

    };

 
 

    handleChangeInput(evento){
        const {name, value} = evento.target;//destructurin de los valores enviados por el metodo onchange de cada input
        let regex = new RegExp("^[ñíóáéú a-zA-Z ]+$");
        for(let i = 0; i <= value.length -1; i++){
            let letra = value[i]
            if(!regex.test(letra ) || !letra === " "){
                    return;
            }
        }
    
            this.setState({
                [name] : value //al elemento dentro de [] es una key de cada parametro dentro del estado.
            }); 
    
    }


    cambioNumero(event) {
        const entrada=event.target.value;
        let cant=0;
        for(let x=0; x<entrada.length;x++)
        if (entrada[x]==='0' || entrada[x]==='1' || entrada[x]==='2' || entrada[x]==='3' || entrada[x]==='4' || entrada[x]==='5' || entrada[x]==='6' || entrada[x]==='7' || entrada[x]==='8' || entrada[x]==='9')

            cant++;
        if (cant===entrada.length)
          this.setState( {
            numero: entrada
          })
      }


      setField (e) {
        this.setState({[e.target.name]: e.target.value})
       }

       submitCheck = () => {
   
        if(!this.state.nombre){
          alert("Falta 1.")
        } else if(this.state.direccion){
          alert("Falta 2.")
        } else if (!this.state.numero) {
               alert("Falta 3.")
       
        } else {
          alert("Bienvenido.")

        }
     }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Layout2 />

          <div className="col-4 justify-content-center" id="Bloque_inicio">
            <h1 className="text-center mt-5" id="Texto_inicio">
              Datos de envío
            </h1>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="inputEmail">Nombre Completo</label>
                <input
                id="nombre" 
                name="nombre" 
                type="text" 
                placeholder="Ingrese el Nombre" 
                        value={this.state.nombre} onChange={this.handleChangeInput}                     className="form-control"
        
                />
              </div>
              <div className="form-group">
                <label className="inputEmail">Dirección</label>
                <input
                  type="direction"
                  id="inputEmail"
                  name="direccion"
                  className="form-control"
                  required
                  placeholder="Dirección"
                />
              </div>
              <div className="form-group ">
                <label className="formGroupExampleInput">Monto</label>
                <input
                  type="cash"
                  name="numero"
                  id="inputPassword"
                  className="form-control"
                               placeholder="Monto"
                  value={this.state.numero} onChange={this.cambioNumero}
                  required


                />
              </div>
            </form>

            <button
                type="submit"
              id="btn_monto"
              class="btn btn-secondary ml-5 mt-3"
       
              onClick={this.submitCheck}
            >
              Aceptar Compra
            </button>
         
            
            <button
                type="submit"
                id="btn_direccion"
              class="btn btn-secondary ml-5 mt-3"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Seguir Comprando
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      ¡Envío Guardado!
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Los datos de envío han sido guardados satisfactoriamente
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <a href="/carrito">
                      {" "}
                      <button type="button" class="btn btn-primary">
                        Continuar
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Carritop;