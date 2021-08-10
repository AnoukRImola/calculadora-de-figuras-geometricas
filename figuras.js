//Código del Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro =  perimetroCuadrado(value);
    const resultado = document.getElementById("resultadoCuadrado");
    resultado.textContent = `${perimetro}cm`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area =  areaCuadrado(value);
    const resultado = document.getElementById("resultadoCuadrado");
    resultado.textContent = `${area}cm`;
}

//Fin del cuadrado


//Código de el triángulo
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(){
    const ladoUno = document.getElementById("ladoA");
    const ladoDos = document.getElementById("ladoB");
    const ladoBase = document.getElementById("base");
    const valor1 = parseInt(ladoUno.value);
    const valor2 = parseInt(ladoDos.value);
    const valor3 = parseInt(ladoBase.value);

    const perimetro = perimetroTriangulo(valor1, valor2, valor3);
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.textContent = `${perimetro}cm`;
    
}

function calcularAreaTriangulo(){
    const ladoBase = document.getElementById("base");
    const ladoAltura = document.getElementById("altura");
    const valor1 = parseInt(ladoBase.value);
    const valor2 = parseInt(ladoAltura.value);

    const area =  areaTriangulo(valor1 , valor2);
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.textContent = `${area}cm`;
}
//Fin del triángulo


//Código de el Círculo
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
  return (radio * radio) * PI;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const valor = parseInt(input.value);

    const perimetro = perimetroCirculo(valor);
    const resultado = document.getElementById("resultadoCirculo");
    resultado.textContent = `${perimetro}cm`;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const valor = parseInt(input.value);

    const area =  areaCirculo(valor);
    const resultado = document.getElementById("resultadoCirculo");
    resultado.textContent = `${area}cm`;
}
//Fin del círculo*/









