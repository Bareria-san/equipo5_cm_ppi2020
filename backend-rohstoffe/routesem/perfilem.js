const {Router} = require("express")
const router = Router()
//const fs = require("fs")
const {connection} = require("./../db/mysql_pool")
//const FileInicio = fs.readFileSync('./productos.json', 'utf-8')
//const JSONInicio = JSON.parse(FileInicio)

router.get('/perfilem/:id',(req,res)=>{
  const {id} = req.params;
  connection.query('SELECT id_empresa, nombre_empresa, correo_empresa, telefono FROM empresas WHERE id_empresa = ?',[id],(err,row,fields)=>{
    if(!err){
      res.json(row[0])
    }else{
      res.status(502).json({mensaje:"Error2"})
    }
  })
})
/*router.get('/perfilem/:id', (req, res) => {
  try{
    const {id} = req.params.id
    connection.query(`SELECT (id_empresa, nombre_empresa, correo_empresa, telefono) 
                      FROM empresas
                      WHERE id_empresa = ?`, [id])
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})*/


router.get('/perfilem', (req, res) => {
  try{
    connection.query("SELECT * FROM empresas", (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true, errorDB : error})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})

  }
})

module.exports = router