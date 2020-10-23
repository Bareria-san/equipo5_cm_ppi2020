const {Router} = require("express")
const router = Router()
const fs = require("fs")
const FileConfigcarrito = fs.readFileSync('./configcarrito.json', 'utf-8')
const JSONConfigcarrito = JSON.parse(FileConfigcarrito)

router.get("/carrito", (req, res) => {
  res.json(JSONConfigcarrito)
})

router.post("/carrito", (req, res) => {
    let id = JSONConfigcarrito.length + 1
    let {direccion, monto} = req.body
    let nuevoConfigcarrito = {
      "id" : id,
      "direccion": direccion,
      "monto": monto
    } 
    JSONConfigcarrito.push(nuevoConfigcarrito)
    fs.writeFileSync('./configcarrito.json', JSON.stringify(JSONConfigcarrito), 'utf-8')
    res.status(202).json(nuevoConfigcarrito)
  })


module.exports = router