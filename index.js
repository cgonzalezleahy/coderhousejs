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







