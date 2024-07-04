//DECLARACION DE FUNCIONES SIN PARAMETROS
//function saludar () {
  //  console.log ("hola mundo!");
//}

//DECLARACION DE UNA FUNCION CON PARAMETROS
//function sumar (a,b) {
  //  return a + b;
//}

//EJEMPLO DE UNA FUNCION CON PROMPT (DECLARACION Y DEVOLUCION)

//function IngresarStringYMostrar (mensaje) {
    //let string = prompt (mensaje)
  //  console.log (string)
//}

//IngresarStringYMostrar ("Ingresa un nombre")

//IngresarStringYMostrar ("Ingresa un apellido")

//EXPRESIONES DE FUNCIONES
//EXPRESION DE FUNCION ANONIMA

//let suma = function (a,b){
  //  return a + b;
//};

//EXPRESION DE FUNCION CON NOMBRE (NOMBRE OPCIONAL)
//let resta = function restaFunc (a,b){
  //  return a-b;
//};

//FUNCIONES CON PARAMETROS Y SUS ARGUMENTOS ASIGNADOS
//FUNCION CON PARAMETROS
//function sumar (a,b) {
  //  return a + b;
//}

//LLAMADA A LA FUNCION CON SUS ARGUMENTOS
//let resultado = sumar(5,3);

//EJEMPLO DE VALORES DEVUELTOS EN FUNCIONES (RETURN)
//FUNCION QUE QUE DEVUELVE EL CUADRADO DE UN NUM
//function CUADRADO(x){
  //  return x * x;
//}

//FUNCION QUE VERIFICA SI UN NUM ES PAR
//function esPAR(num){
   // return num % 2 === 0;
//}

//FUNCIONES FLECHA
//FUNCION FLECHA PARA SUMAR DOS NUM
//let sumar = (a,b) => a + b;

//FUNCION FLECHA PARA ELEVAR UN NUM AL CUADRADO
//let cuadrado = x => x * x;

//FUNCION FLECHA PARA SALUDAR A UNA PERSONA
//let saludar = nombre => console.log("¡Hola, " + nombre + "!");

//EJEMPLO DE UN CALLBACK

let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio (numeros);
console.log ("El promedio es:", promedio);

function calcularPromedio (numeros){
    let suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.lenght;
}
