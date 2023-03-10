/* 3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.*/
a = prompt("Inserte el valor que tiene la resistencia (en Ohmios Ω)");
b = prompt("Digita la intensidad de la corriente (en voltios)");
parseFloat(a);
parseFloat(b);
function operacion (b, a){
    return b/a;
}
var voltaje = operacion(b, a);
voltajee = (voltaje.toFixed(3));
alert("Segun la resistencia de " + a +  "Ω aplicada en la intensidad de corriente de " + b + " voltios, el voltaje total del circuito es de " + voltajee +"V.")