const express = require('express');
const path = require("path");
const morgan = require("morgan");
const app = express();

app.use(morgan('dev'))
app.use(express.json())


app.get('/',(req,res) => {
    res.send('Servidor Rohstoffe equipo 5 Activo');
});

app.use("/api/", require("./routesco/inicio"))
app.use("/api/", require("./routesco/carrito"))
/*app.use("/api/", require("./routesem/comprador")) 
app.use("/api/", require("./routesem/empresas")) */

app.set("puerto", 3000)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor Rohstoffe corriendo en el puerto ${app.get("puerto")}`)
})
