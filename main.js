/* 4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */
n1 = prompt("Ingresa tu nombre");
e1 = prompt (n1 + ", ingresa tu edad");
parseInt(e1);
alert(n1 + " tu edad es de " + e1 + " años");
n2 = prompt("Ingresa tu nombre");
e2 = prompt (n2 + ", ingresa tu edad");
parseInt(e2);
alert(n2 + " tu edad es de " + e2 + " años");
n3 = prompt("Ingresa tu nombre");
e3 = prompt (n3 + ", ingresa tu edad");
parseInt(e3);
alert(n3 + " tu edad es de " + e3 + " años");
let emayor = "";
if(e1 > e2 && e1 > e3){
        emayor = n1 + " es la persona con mas edad aqui.";
    }
else if(e2 > e1 && e2 > e3){
        emayor = n2 + " es la persona con mas edad aqui.";
    }
else if(e3 > e1 && e3 > e2){
        emayor = n3 + " es la persona con mas edad aqui.";
    }
else{
        emayor = "Digita valores validos..."
    }

alert(emayor)