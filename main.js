/* 8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */

ladoCua= parseFloat(prompt("Ingresa el valor de un lado del cuadrado (en cm)"));
base= parseFloat(prompt("Inserta la base del rectangulo (en cm)"));
altura = parseFloat(prompt("Inserta la altura del rectangulo (en cm)"));

perimetro = ladoCua * 4;
area= (base*altura);
alert("El perimetro del cuadrado es igual a " + perimetro + "cm \nEl area del rectangulo es de " + area + " cm2");