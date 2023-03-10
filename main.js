/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */
let fTotal = 0;
preTotal = parseFloat("");
do{
    let nombr = prompt("Ingresa tu nombre:");
    let nart = prompt(nombr + ", ingresa el nombre del articulo");
    let part = parseFloat(prompt("Ingresa el precio por unidad del o de los " + nart + "(s)"));
    let cart = parseFloat(prompt("Digita el numero de "+ nart + "(s) que desea llevar"));
    preTotal = parseFloat(part*cart);
    fTotal += preTotal;
    alert("El precio total a pagar por los " + cart + " " + nart + "(s)" + " llevados es de" + " COP$" + preTotal);
}while(confirm("¿Deseas añadir otro articulo?"));

alert("Tu valor total a cancelar es de COP($)" + fTotal)