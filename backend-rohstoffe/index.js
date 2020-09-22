const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Servidor Rohstoffe equipo 5 Activo');
});

app.listen(3000, () => {
  console.log('server on port 3000');
});
