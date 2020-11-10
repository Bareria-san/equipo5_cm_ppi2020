const mysql = require ('mysql')
const connection = mysql.createConnection({

  host: "bkutbfulguyqwtduotnp-mysql.services.clever-cloud.com",
  user: "ufjh6yqoec16zsi0",
  password: "VUnBYqzqKAp2mK4RREkU",
  database: "bkutbfulguyqwtduotnp"

});
/*
connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
      }else{   console.log("Conexión extablecida con el servidor de MySQL")
    }
}); */

module.exports =  {connection: connection}