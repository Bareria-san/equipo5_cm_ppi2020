const {Router} = require("express")
const router = Router()
const fs = require("fs")
const {} = require("./../db/mysql")
const FileInicio = fs.readFileSync('./productos.json', 'utf-8')
const JSONInicio = JSON.parse(FileInicio)

router.get("/inicio", (req, res) => {
  res.json(JSONInicio)
})

router.get("/inicio/:id", (req,res) => {
    let id = req.params.id
    let ProductoEncontrado = JSONInicio.find(producto => producto.id == id)
  
    if(ProductoEncontrado != undefined)
      res.status(200).json(ProductoEncontrado)
    else
      res.json(`El producto con el ID ${id} no existe`)
  })

module.exports = router