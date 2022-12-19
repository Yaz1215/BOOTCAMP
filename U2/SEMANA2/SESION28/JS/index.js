var resultado=0;
function sumando( numero1,numero2){

    resultado= numero1+ numero2;
    return resultado;

}

console.log(sumando(4,5));
console.log(sumando(8,12));

var hoyEsUnDiaSoleado; //EJEMPLO DE CAMEL CASE

//HALLANDO EL AREA DE UN CIRCULO
let resultadoArea;
let radio;
const pi=3.14;

radio=prompt("INGRESA UN RADIO:");
resultadoArea= pi*radio*radio; //3.14*5*5= 78.5
console.log(resultadoArea);

//PASANDO CODIGO A FUNCION
function areaCirculo( radio ){

    const pi=3.14;  //cuando usamos const significa que nunca va a cambiar ese valor
    let resultadoArea;
   
    resultadoArea= pi*radio*radio;
    return resultadoArea;
}

radio= prompt("INGRESA TU RADIO:");
console.log(areaCirculo(radio));


function notas( calificacion ){

if(calificacion>=13){

  alert("USTED APROBO EL CURSO,¡FELICIDADES!");
}

else if(calificacion<13){

    alert("USTED JALÓ EL CURSO, DEBE ESFORZARSE MÁS PARA LA PRÓXIMA")
}

}

let valorNota = prompt("INGRESA TU NOTA");
notas(valorNota );



function areaTriangulo(base,altura){

   let area=base*altura/2
   return area;
}

let baseTriangulo = prompt("INGRESA UNA BASE PARA EL TRIANGULO:")
let alturaTriangulo = prompt("INGRESA UNA ALTURA PARA EL TRIANGULO:");

console.log(areaTriangulo(baseTriangulo , alturaTriangulo));


function areaCuadrado(lado){

    let area = lado*lado
    return area;
 }
 
 let ladoCuadrado = prompt("INGRESA UN LADO DEL CUADRADO:")
 
 console.log(areaCuadrado(ladoCuadrado));