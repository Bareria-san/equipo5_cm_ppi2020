const {Router} = require("express")
const router = Router()
const fs = require("fs")
const {} = require("./../db/mysql")
const FileAgregar = fs.readFileSync('./productos.json', 'utf-8')
const JSONAgregar = JSON.parse(FileAgregar)

router.get("/anadirproductos", (req, res) => {
  res.json(JSONAgregar)
})

router.post("/anadirproductos", (req, res) => {
  let id = JSONAgregar.length + 1
  let {nombre, descrip, empresa, precio, stock} = req.body
  let nuevoProducto = {
    "id" : id,
    "nombre" : nombre,
    "descrip" : descrip,
    "Empresa" : empresa,
    "precio" : precio, 
    "stock": stock
  } 
  JSONAgregar.push(nuevoProducto)
  fs.writeFileSync('./productos.json', JSON.stringify(JSONAgregar), 'utf-8')
  res.status(201).json(nuevoProducto)
})

module.exports = router