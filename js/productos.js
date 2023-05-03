
let productos = [

 { id:1, nombre: "remeras", precio: 1000, stock: 5},
 { id:2, nombre: "buzos", precio: 2000, stock: 5},
 { id:3, nombre: "pantalones", precio: 3000, stock: 5}
];

function eliminar (n){
  productos.splice(n,1)
}

function ingresarProducto() {

 
     while (producto === "1" & productos[0].stock!=0 || producto === "2" & productos[1].stock!=0 || producto === "3" & productos[2].stock!=0) {
         
         switch (producto) {
             case "1":
 
               cantidad += 1
               total += productos[0].precio
               productos[0].stock=productos[0].stock-1 
               carrito.push(productos[0].nombre)
               producto = prompt ("desea comprar otro producto")
               break;
 
             case "2":
 
               cantidad += 1
               total += productos[1].precio
               carrito.push(productos[1].nombre)
               productos[1].stock=productos[1].stock-1
               producto = prompt ("desea comprar otro producto")
               break;
             
             case "3":
 
               cantidad += 1
               total += productos[2].precio
               carrito.push(productos[2].nombre)
               productos[2].stock=productos[2].stock-1
               producto = prompt ("desea comprar otro producto")
               break;
 
             default:
               break;
         }
     }
 }
 
 const iva = precio => precio * 1.21
 
 const descuento = precio => precio * 0.9
 
 let producto = prompt (`Elija un producto: 
 1: Remeras ($1000 + iva)
 2: Buzos ($2000 + iva)
 3: Pantalones ($3000 + iva)
 
 ---Si compras mas de un producto obtenes el 10% de descuento sobre el total--`)
 
 let cantidad = 0
 let total = 0
 let carrito = []
 
 ingresarProducto ()
 
 if (cantidad===1) {
 
     total = iva (total)
     alert (`Gracias por su compra. Debe abonar ${total}`)
     console.log(`Usted compro los siguientes productos: ${carrito}`)
 
 } else if (cantidad>1){
 
     total = descuento (iva (total))
     alert (`Gracias por su compra. Obtuvo el descuento. Debe abonar ${total}`)
     console.log(`Usted compro los siguientes productos: ${carrito}`)
 
 } else {
 
     alert (`Lo esperamos la proxima`)
 }

 
 let resultado = productos.filter((producto) => producto.precio >= 2000 )

     console.log (resultado)

 let elimina = prompt (`Que producto desea eliminar?
          1: Remeras ($1000 + iva)
          2: Buzos ($2000 + iva)
          3: Pantalones ($3000 + iva)
     `)

 switch (elimina) {
      case "1":

        eliminar(0)
        break;

      case "2":

       eliminar(1)
        break;
      
      case "3":

       eliminar(2)
        break;

      default:
        break;
  }

  console.log (productos)