/* 6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */
let nombs = [];
let nota = [];
let hombres= 0;
let mujeres = 0;
do{
    let nomb = prompt("Ingresa un nombre");
    nombs.unshift(nomb);
    nota.unshift(parseFloat(prompt("Ingrese su nota (de 0 a 5)")));
    sexo = prompt("Ingresa el sexo (M para masculino, F para femenino");
    
    if(sexo = "M"){
        hombres++;
    }
    else if (sexo = "F"){
        mujeres++;
    }
}while(confirm("Deseas guardar otro dato?"));


let pmax = nota.indexOf(Math.max(...nota));
console.log(nombs[pmax], " fue la persona con la nota mas alta");

let pmin = nota.indexOf(Math.min(...nota));
console.log(nombs[pmin], " fue la persona con la nota mas baja, jaja");
console.log("Hay " + hombres + " hombre(s) en el programa. \nHay " + mujeres + " mujer(es) en el programa" )