const {Router} = require("express")
const router = Router()
const fs = require("fs")
const FileCarrito = fs.readFileSync('./carrito.json', 'utf-8')
const JSONCarrito = JSON.parse(FileCarrito)

router.get("/carritodecompra", (req, res) => {
  res.json(JSONCarrito)
})

router.post("/carritodecompra", (req, res) => {
    let id = JSONCarrito.length + 1
    let {precio, cantidad, total, direccion, monto} = req.body
    let nuevoCarrito = {
      "id" : id,
      "precio": precio,
      "cantidad": cantidad,
      "total": total,
      "direccion": direccion,
      "monto": monto
    } 
    JSONCarrito.push(nuevoCarrito)
    fs.writeFileSync('./carrito.json', JSON.stringify(JSONCarrito), 'utf-8')
    res.status(201).json(nuevoCarrito)
  })

module.exports = router