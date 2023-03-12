/* 9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */
let nombs = [];
let marca = [];
do {
    let nomb = prompt("Añade el nombre de la atleta");
    nombs.unshift(nomb);
    marca.unshift(parseFloat(prompt("Digita la marca de la atleta (en metros)")));
}while(confirm("¿Deseas añadir otra atleta?"))

let marmax = Math.max(...marca);
let marcamax = marca.indexOf(Math.max(...marca));
console.log(nombs[marcamax], "fue la atleta campeona al tener la marca mas alta, con " + Math.max(...marca) + " metros")

if(marmax > 15.50){
    console.log("FELICITACIONES, HAS SUPERADO EL RECORD DE 15.50m, POR LO TANTO RECIBIRAS UN PAGO DE 500 BOLIVARES :3");
}
else if(marmax == 15.50){
    console.log("Has igualado el record actual, felicitaciones, tendras que esforzarte un poco mas para la proxima");
}
else{
    console.log("Aunque hayas salido campeona actual, no rompiste el record, ja ja ja")
}