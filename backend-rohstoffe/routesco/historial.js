const {Router} = require("express")
const router = Router()
const fs = require("fs")
const {} = require("./../db/mysql_pool")
const FileHistorial = fs.readFileSync('./productos.json', 'utf-8')
const JSONHistorial = JSON.parse(FileHistorial)

router.get("/historialdecompras", (req, res) => {
  res.json(JSONHistorial)
})

router.get("/historialdecompras/:id", (req,res) => {
    let id = req.params.id
    let ProductoEncontrado = JSONHistorial.find(producto => producto.id == id)
    if(ProductoEncontrado != undefined)
      res.status(205).json(ProductoEncontrado)
    else
      res.json(`Usted no ha comprado el producto con el ID ${id} anteriormente`)
  })

module.exports = router