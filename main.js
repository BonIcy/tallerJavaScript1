/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */
//pedimos datos y hacemos que rompa en 0 y que el 0 se acumule
let conts = [];
while(conts){
    let cont = parseFloat(prompt("Digita el numero que quieres acumular (Usa el 0 cuando quieras que te deje de pedir numeros)"));
    conts.push(cont);
    if (cont == 0){
        break;
    }
} 
//esto es para sacar el segundo valor minimo ya que el 0 seria el valor minimo dentro del array
let min1=min2=100;
for(var i=0;i<conts.length;i++){
	if(conts[i]<min1){
		min2=min1;
		min1=conts[i];
    }
    else if(conts[i]<min2){
		min2=conts[i];
	}
}

let noCero = conts.pop();//elimino el 0 del array con el pop teniendo en cuenta que tenia los valores pusheando (const.push)
const suma2 = conts.reduce((anterior, actual) => anterior + actual, 0); //sumo todos los valores del array
let prom = suma2 / conts.length; //saco el promedio dividiendo la suma total con el numero de digitos, teniendo en cuenta que el 0 ya no se enuentta dentro del array y no lo cuenta como un elemento a la hora de poner el const.length
console.log(conts);
console.log ("Fueron digitados un total de " +  conts.length + " numeros, excluyendo el 0 con el que terminaste de ingresar datos. \n\nEl numero mas alto que fue digitado es el " +  Math.max(...conts) + ".\n\nEl numero menor digitado es el " + min2 + ", excluyendo al 0. \n\nLa suma de todos los valores digitados es de " + suma2 + ".\n\nEl valor promedio es de " + prom + " dentro de la lista de numeros acumulados.");
