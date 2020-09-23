const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Backend de Rohstoffe (equipo #5)');
});
app.listen(6057, function(){
    console.log("El servidor está en uso.");
});

