const {Router} = require("express")
const router = Router()
const {connection} = require("./../db/mysql")
connection.connect()
const fs = require("fs")
const FileCarrito = fs.readFileSync('./carrito.json', 'utf-8')
const JSONCarrito = JSON.parse(FileCarrito)

router.get("/carritodecompra", (req, res) => {
  try{
    connection.query("SELECT * FROM `carrito_de_compra`",(error,rows,fields)=>{
      if(error){
        res.status(502).json("error de base de datos")
    }
     res.json(rows)
    })
    }catch(error){
      console.log("Este es el error: ")
  }
})

router.put("/carritodecompra/:id_carrito", (req, res) => {
 try{
     const id_carrito = req.params.id
     const {
              cantidad,
              valor_total,
              direccion_entrega,
              monto

     } = req.body

     connection.query(`UPDATE carrito_de_compra
     SET cantidad = '${cantidad}'
      WHERE id_carrito = ?`,[cantidad,id_carrito],(error,resulset) => {
        console.log(resulset)
        console.log(error)
      })
    // console.log(id_carrito)
    }catch(error){
      res.status(502).json({mensaje: "Error en el servidor", error : true})
  }
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