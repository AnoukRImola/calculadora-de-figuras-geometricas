//Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado}cm2`);

console.groupEnd();//Fin del cuadrado


//Código de el triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const sumaLadosTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`Los lados del triángulo miden: ${sumaLadosTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo *alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm2`);

console.groupEnd();//Fin del triángulo


//Código de el Círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

//Pi
const PI = Math.PI;
console.log(`PI es: ${PI}`);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del círculo es: ${areaCirculo}cm2`);

console.groupEnd();//Fin del círculo
