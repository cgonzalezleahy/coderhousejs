
let usuario;
let usuarioStorage;
if(usuarioStorage){
    usuario = usuarioStorage;
    alert("Bienvenido " + usuario);
}else{
    usuario = prompt("Ingrese su nombre ");
}


const listaProductos = [];
let cantidad = 5 ;
do {
    let entrada =  prompt ("Ingresar nombre de los productos:");
    listaProductos.push(entrada.toUpperCase());
    console.log(listaProductos.length);
}while(listaProductos.length != cantidad)
const productoExtra = listaProductos.concat(["BOLSA DE TELA"]);
alert(productoExtra.join("\n"))

Swal.fire('Has ingresado todos los productos! Ahora podemos seguir...')


const productos = [ 
    { id: 1 , nombre: "remera", precio: 2000},
    { id: 2, nombre: "pantalon", precio: 3500},
    { id: 3, nombre: "buzo", precio: 4000},
    { id: 4, nombre: "campera", precio: 6000},
    { id: 5, nombre: "short", precio: 2500},
    { id: 6, nombre: "bolsaDeTela", precio: 500},
];

for (const producto of productos){
    guardarStorage(producto.id, JSON.stringify(producto))
}

localStorage.setItem("carrito", JSON.stringify(productos));

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Has terminado con tu compra! Recuerda que ahora tienes coutas sin interes para pagar',
    showConfirmButton: false,
    timer: 1500
})


let precio = prompt ('Ingrese el total: $ ');
alert ('El total a pagar es de: $ ' + precio);



let elegir = prompt ('Elija en cuantas coutas quiere pagar: \n| 1- para 1 cuota | \n| 2- en 3 cuotas   | \n| 3- en 6 cuotas   | \n| 4- en 12 cuotas |');
alert('Eligió la opción de pagar en '+ elegir + " coutas");


if (elegir == 1){
    alert('El total a pagar es de: $ ' + precio);
}

if (elegir == 2){
    opcion2 = precio /3
    alert('El total a pagar por couta es de: $' + opcion2);
}

if (elegir == 3){
    opcion3 = precio /6
    alert('El total a pagar por couta es de: $' + opcion3);
   
}
if (elegir == 4){
    opcion4 = precio /12
    alert('El total a pagar por couta es de: $' + opcion4);
}   

else{
    alert('Error, se pidió que ingrese un número del 1 al 4, vuelva a intentarlo');
}   


let input = document.getElementById("nombre");
let saludo = document.getElementById("saludo");
input.addEventListener("input", () => {
    if (input.value.elegir === 1){
        saludo.className = "verde";
    }if (input.value.elegir === 2){
        saludo.className = "amarillo";
    }if (input.value.elegir === 3){
        saludo.className = "azul";
    }if (input.value.elegir === 4 ){
        saludo.className = "rojo";
    }
})


input.addEventListener("keydown", () => {
    if(e.key === "Enter"){
        console.log("Formulario enviado");
    }
})


