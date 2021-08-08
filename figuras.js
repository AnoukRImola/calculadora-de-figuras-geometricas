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



//HTML interacción Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro =  perimetroCuadrado(value);
    const resultado = document.getElementById("resultado");
    resultado.textContent = `${perimetro}cm`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area =  areaCuadrado(value);
    alert(area);
}

//HTML interacción Triángulo
function calcularPerimetroTriangulo(){
    const ladoUno = document.getElementById("ladoUnoTriangulo");
    const ladoDos = document.getElementById("ladoDosTriangulo");
    const ladoBase = document.getElementById("baseTriangulo");
    const input = ladoUno + ladoDos + ladoBase;
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area =  areaTriangulo(value);
    alert(area);
}


//HTML interacción Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area =  areaCirculo(value);
    alert(area);
}