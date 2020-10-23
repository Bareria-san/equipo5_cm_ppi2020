const {Router} = require("express")
const router = Router()
const fs = require("fs")
const FilePedidos = fs.readFileSync('./carrito.json', 'utf-8')
const JSONPedidos = JSON.parse(FilePedidos)

router.get("/pedidos", (req, res) => {
  res.json(JSONPedidos)
})

router.get("/pedidos/:id", (req,res) => {
    let id = req.params.id
    let pedidoEncontrado = JSONPedidos.find(pedido => pedido.id == id)
  
    if(pedidoEncontrado != undefined)
      res.status(206).json(pedidoEncontrado)
    else
      res.json(`El número de pedido ${id} no existe.`)
  })

module.exports = router