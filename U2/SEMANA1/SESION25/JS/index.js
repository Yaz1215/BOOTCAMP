document.getElementById("titulo").innerHTML="VERIFICADO";
document.getElementById("parrafo").innerHTML="yeiii";
document.getElementById("mensaje").innerHTML="prueba";


for(let i=1; i<=5; i++){

console.log("Hola");

}

var mensaje= "BIEN" /*2 formas de trabajar afuera y el ejemplo de arriba adentro el 1ero megusta:V*/
for(let x=1; x<=10; x++){

console.log(mensaje);         

}

var texto= "hola";

for(let y=1; y<=4; y++){

    console.log(texto);
    console.log(y);

}

//SUMATORIA DE NUMEROS CON FOR
var suma=0

for(let i=1; i<=100; i++){

suma=i+suma;
}

console.log(suma);

document.getElementById("mensaje").innerHTML=suma;