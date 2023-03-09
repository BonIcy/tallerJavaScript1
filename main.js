/* 1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */
//creo las 3 peticiones (notas)
var texto  = ""; 
let n1 = prompt("Inserta tu nota (de 0 a 5) en el taller 1");

let n2 = prompt("Inserta tu nota (de 0 a 5) en el ejercicio de algebra");

let n3 = prompt("Inserta tu nota (de 0 a 5) en el taller 2");

//sumo los 3 valores convirtiendolos en flotantes, luego divido la suma entre 3
let nt = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3));
parseFloat(nt);
let np = (parseFloat(nt)/3);

//digo que solo se muestre un decimal con el toFixed(1), y pongo la alerta al final 
let nn = (np.toFixed(1));
while(np){
    if (np <= 3.9){
        texto = "Tu promedio fue de " + nn + "\nPonte a estudiar mamaguevo";
        break;
    }
    else if(np > 3.9 && np <= 5){
        texto = "Tu promedio fue de " + nn + "\nAhora estas becado, felicitaciones";
        break;
    }
    else{
        texto = "Digita valores válidos porfavor...";
        setTimeout(function(){
            window.location.reload();
         }, 1500);
    }
    break;
}
alert(texto);
