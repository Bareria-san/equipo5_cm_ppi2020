const {Router} = require("express")
const router = Router()
//const fs = require("fs")
const {connection} = require("./../db/mysql_pool")
//const FileInicio = fs.readFileSync('./productos.json', 'utf-8')
//const JSONInicio = JSON.parse(FileInicio)

router.get('/perfilco/:id',(req,res)=>{
  const {id} = req.params;
  connection.query('SELECT id_comprador, nombre_completo, correo FROM compradores WHERE id_comprador = ?',[id],(err,row,fields)=>{
    if(!err){
      res.json(row[0])
    }else{
      res.status(502).json({mensaje:"Error2"})
    }
  })
})

module.exports = router