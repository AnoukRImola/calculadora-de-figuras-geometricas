//Código del Cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);*/

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();//Fin del cuadrado


//Código de el triángulo
console.group("Triángulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const sumaLadosTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`Los lados del triángulo miden: ${sumaLadosTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);*/

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd();//Fin del triángulo


//Código de el Círculo
console.group("Círculos");

//Radio
/*const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);*/

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//Pi
const PI = Math.PI;
console.log(`PI es: ${PI}`);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio){
  return (radioCirculo * radioCirculo) * PI;
}


console.groupEnd();//Fin del círculo



//HTML interacción
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro =  perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area =  perimetroCuadrado(value);
    alert(area);
}
