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

 const carrito2 = [
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
 
//function buscarId(id) {
  //let encontrado = false;
  //for (i = 0; i < bookings.length; i++) {
    //encontrado = encontrado || bookings[i].id == id;
    //}
    //return encontrado;
  //}

  //for (i = 0; i < carrito.length; i++) {
    //imprimir(carrito[i]);
  //}

//function imprimir(carrito) {
  //for(attr in carrito) {
    //console.log(attr.toUpperCase() +": " + carrito[attr]);
  //}
  //console.log(imprimir(carrito));


  //for(attr in carrito) {
    //console.log(attr.toUpperCase() +": " + carrito[attr]);
  //}
  //LISTAR TODOS LOS PRODUCTOS
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("*LISTAR TODOS LOS PRODUCTOS");
    for (i = 0; i < carrito.length; i++) 
        imprimir(carrito[i]);
      
    
  // Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("*TOTAL CARRITO:");
  
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
  
    let total2 = 0;

    for (i = 0; i < carrito2.length; i++) {
      total2 = total2 + (carrito2[i].price * carrito2[i].count);
     }
       let totalDiscount2 = total2 * 0.95;
       let gastosPremium = premium = true;
       if(premium == true && total2 > 50){
         console.log("Total: " + totalDiscount2 + "€" + ". Enhorabuena, 5% de descuento y sin gastos de envío!");
       }else if(premium == true && total2 < 50){
         console.log("Total: " + totalDiscount2 + "€" + ". Gastos de env gratuitos por premium!");
       }else{
         console.log("Total: " + total2 + ". Con gastos de envío");
       }
   

 console.log("-------------------------------------------------------")


//ELIMINAR EL PRODUCTO CON id 54657 DEL CARRITO DE LA COMPRA
 console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("*PRODUCTO CON id 54657 ELIMINADO")
  var indice;
  for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == 54657) {
      indice = i;
    };
  }

  carrito.splice(indice, 1);

  for (producto of carrito){
    imprimir(producto);
  }

  function imprimir(producto) {
    console.log("ID: " + producto.id);
    console.log("Nombre: "  + producto.name);
    console.log("Precio: " + producto.price);
    console.log("Cantidad: " + producto.count);
    console.log("Premium: " + producto.premium);
    console.log("------------------------------------------------------");
  }
  

  //MOSTRAR SOLO PRODUCTOS PREMIUM
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("*IMPRIMIR SOLO PRODUCTOS PREMIUM");
  for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium == true) {
      imprimir(carrito[i]);
    }
  }


  //OPCIONAL
  //let total2 = 100;
  //function gastosEnv () {
    //if(total2 == 100){
      //console.log("Enhorabuena, no pagas gastos de envío" + total2);
    //}
  //}



  






