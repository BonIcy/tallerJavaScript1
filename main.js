/* 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */
n1 = prompt("Ingresa el primer número");
n2 = prompt("Ingresa el segundo número");
parseFloat(n1);
parseFloat(n2);
if(n1 > n2){
    alert("La suma de los digitos da como resultado " + (parseFloat(n1) + parseFloat(n2)) + "\nLa resta de los digitos da como resultado " + (parseFloat(n1) - parseFloat(n2)));
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
else if(n1 < n2){
    alert("El producto entre los digitos da como resultado "+ (parseFloat(n1) * parseFloat(n2)) + "\nLa division da como resultado " + (parseFloat(n1) / parseFloat(n2)).toFixed(3));
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
else{
    alert("Digita valores validos");
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}