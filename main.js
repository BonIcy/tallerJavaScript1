/* 2. Dado un número indicar si es par o impar y si es mayor de 10. */
num = prompt("Digita el numero que quieres evaluar")
parseInt(num);

if (num % 2 == 0){
    if (num > 10){
        alert("El numero " + num + " es par, y ademas es mayor que 10")
    }
    else{
        alert("El numero " + num + " es par, y ademas es menor que 10")
    }
}
else if (num % 2 != 0){
    if (num < 10){
        alert("El numero " + num + " es impar, y ademas es menor que 10")
    }
    else{
        alert("El numero " + num + " es impar, y ademas es mayor que 10")
    }
}