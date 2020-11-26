const express = require('express');
const path = require("path");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
require('dotenv').config()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'))
app.use(cors({origin: '*'}));
app.get('/',(req,res) => {
    res.send('Servidor Rohstoffe equipo 5 Activo');
});

app.get('/api',(req,res)=>{
  res.send("Esto es un /api !!")
})

app.use("/api/", require("./routesco/inicio"))
app.use("/api/", require("./routesco/carrito"))
app.use("/api/", require("./routesem/agregar"))
app.use("/api/", require("./routesem/productos"))
app.use("/api/", require("./routesem/pedidos"))
app.use("/api/", require("./routesco/historial"))
app.use("/api/", require("./routeslog/inisesion"))
app.use("/api/", require("./routeslog/registro"))
app.use("/api/", require("./routesco/favoritos"))
app.use("/api/", require("./routesco/perfilco"))
app.use("/api/", require("./routesco/perfilem"))
/*app.use("/api/", require("./routesem/comprador")) 
app.use("/api/", require("./routesem/empresas")) */

app.set('port',process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Servidor Rohstoffe corriendo en el puerto ${app.get("port")}`)
})
