const {Router} = require("express")
const router = Router()
const {connection} = require("./../db/mysql_pool")

router.post('/login',(req,res)=>{
const {nombre_completo, correo, contrasena} = req.body;
let datacompra = [nombre_completo, correo, contrasena];
let newcompra = 'INSERT INTO compradores(nombre_completo, correo, contrasena) VALUES (?,?,?)';
connection.query(newcompra, datacompra, (err, results, fields)=>{
  if(err){
    return console.error(err.message)
  }
  console.log(results)
  res.json({ message:`comprador agregado`, })
})
})

router.post('/loginem',(req,res)=>{
const {nombre_empresa,nombre_propetario, correo_empresa, contrasena_empresa, telefono} = req.body;
let dataempresa = [nombre_empresa,nombre_propetario, correo_empresa, contrasena_empresa, telefono];
let newempresa = 'INSERT INTO empresas(nombre_empresa,nombre_propetario, correo_empresa, contrasena_empresa, telefono) VALUES (?,?,?,?,?)';
connection.query(newempresa, dataempresa, (err, results, fields)=>{
  if(err){
    return console.error(err.message)
  }
  console.log(results)
  res.json({ message:`empresa creada`, })
})
})

module.exports = router;