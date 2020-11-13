const {Router} = require("express")
const router = Router()
const {connection} = require("./../db/mysql")
const fs = require("fs")
const FileProductos = fs.readFileSync('./productos.json', 'utf-8')
const JSONProductos = JSON.parse(FileProductos)

router.get("/productos", (req, res) => {
  res.json(JSONProductos)
})

/*router.get("/productos/:id", (req,res) => {
    let id = req.params.id
    let ProductoEncontrado = JSONProductos.find(producto => producto.id == id)
  
    if(ProductoEncontrado != undefined)
      res.status(200).json(ProductoEncontrado)
    else
      res.json(`El producto con el ID ${id} no existe`)
  })*/

module.exports = router