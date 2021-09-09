const carrito = [
  {
  id: 198752,
  name: "Tinta DJ27 Color",
  price: 52.95,
  count: 3,
  premium: true
  },
  {
  id: 75621,
  name: "Impresora ticketera PRO-201",
  price: 32.75,
  count: 2,
  premium: true
  },
  {
  id: 54657,
  name: "Caja de rollos de papel para ticketera",
  price: 5.95,
  count: 3,
  premium: false
  },
  {
  id: 3143,
  name: "Caja de folios DIN-A4 80gr",
  price: 9.95,
  count: 2,
  premium: false
  }
 ];

 const carritoPremium = [
  {
  id: 198752,
  name: "Tinta DJ27 Color",
  price: 12.95,
  count: 1,
  premium: true
  },
  {
  id: 75621,
  name: "Impresora ticketera PRO-201",
  price: 22.75,
  count: 1,
  premium: true,
  }
 ];
 
//LISTAR TODOS LOS PRODUCTOS
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("*LISTAR TODOS LOS PRODUCTOS"); 
 for (producto of carrito) {
   imprimir(producto);
 }

 function imprimir(producto) {
   for (attr in producto) {
     console.log(attr() + ": " +  producto[attr]);
    }
  }


//MOSTRAR EL CARRITO EN UN LISTADO DE HTML BÁSICO.
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++") 
console.log("*MOSTRAR EL CARRITO EN UN LISTADO DE HTML BÁSICO.");

 function carritoHtml(carrito) {

 let ol = document.createElement('ol');
 document.getElementById('carrito-items').appendChild(ol);
 ol.className = "product-list";

 for (producto in carrito) {
    let productList = document.createElement('ol');
    productList.innerHTML = carrito[producto].name;

    let productListId = document.createElement('li');
    productListId.innerHTML = "ID:" + " " + carrito[producto].id;
    let productListPrice = document.createElement('li');
    productListPrice.innerHTML = "PRECIO:" + " " + carrito[producto].price;
    let productListCount = document.createElement('li');
    productListCount.innerHTML = "CANTIDAD:" + " " + carrito[producto].count;
    let productListPremium = document.createElement('li');
    productListPremium.innerHTML = "PREMIUM:" + " " + carrito[producto].premium;

    productList.className = "product-list";
    productListId.className = "product-list";
    productListPrice.className = "product-list";
    productListCount.className = "product-list";
    productListPremium.className = "product-list";

     ol.appendChild(productList);
     productList.appendChild(productListId);
     productList.appendChild(productListPrice);
     productList.appendChild(productListCount);
     productList.appendChild(productListPremium);
 }
}
 carritoHtml(carrito);   

    
  //Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("*TOTAL CARRITO:");

  function calcularTotal(carrito) {
    let total = 0;
    for (i = 0; i < carrito.length; i++) {
    total = total + (carrito[i].price * carrito[i].count);
  }
    let totalDiscount = total * 0.95;
    if(total > 100){
      console.log("Total: " + totalDiscount + "€" + " Enhorabuena, se ha aplicado un 5% de descuento.");
    }else{
      console.log("Total: " + total + "€" + " Si gastas + de 100€, se aplicará un 5% de descuento.");
    }
  }
  calcularTotal(carrito);


  function calcularTotalPremium(carritoPremium) {
    let total2 = 0;
    for (i = 0; i < carritoPremium.length; i++) {
      total2 = total2 + (carritoPremium[i].price * carritoPremium[i].count);
    }
       let gastosPremium = carritoPremium.premium = true;
       if(gastosPremium){
         console.log("Total: " + total2 + "€" + ". Sin gastos de envío!");
       }else{
         console.log("Total: " + total2 + "€" + ". Con gastos de envío.");
       }
    }
    calcularTotalPremium(carritoPremium);



//ELIMINAR EL PRODUCTO CON id 54657 DEL CARRITO DE LA COMPRA
 console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
 console.log("*PRODUCTO CON id 54657 ELIMINADO")

 function eliminarProducto() {
   for (i = 0; i < carrito.length; i++) {
  
   if (carrito[i].id == 54657) {   //si el id es 54657
   carrito.splice(i, 1); //eliminar el producto    
   }   
  }
  }   
  eliminarProducto();

 

  function imprimir(producto) {
    console.log("ID: " + producto.id);
    console.log("Nombre: "  + producto.name);
    console.log("Precio: " + producto.price);
    console.log("Cantidad: " + producto.count);
    console.log("Premium: " + producto.premium);
    console.log("------------------------------------------------------");
  }

  for (producto of carrito){
    imprimir(producto);
  }
  

  //MOSTRAR SOLO PRODUCTOS PREMIUM
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("*IMPRIMIR SOLO PRODUCTOS PREMIUM");

  function imprimirPremium(carrito) {
    for (i = 0; i < carrito.length; i++) {
      if (carrito[i].premium) {
        imprimir(carrito[i]);
      }
    }
  }

  imprimirPremium(carrito);
