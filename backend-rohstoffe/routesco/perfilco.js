const {Router} = require("express")
const router = Router()
//const fs = require("fs")
const {connection} = require("./../db/mysql_pool")
//const FileInicio = fs.readFileSync('./productos.json', 'utf-8')
//const JSONInicio = JSON.parse(FileInicio)

router.get('perfilco/:id', (req, res) => {
  try{
    const id = req.params.id
    connection.query(`SELECT id_comprador, nombre_completo, correo 
                      FROM compradores
                      WHERE id = ?`, [id])
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

module.exports = router