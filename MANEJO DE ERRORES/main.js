//ejemplo de callback
function mayus(palabra, fn){
    let palabraRetornada = fn(palabra)
    console.log(palabraRetornada)
}

function manipularPalabra(palabra){
    return palabra.toUpperCase()
}

//mayus('hola', manipularPalabra)

const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

//forEach
const sumarDos = num => console.log(num + 2)

const arrayForEach = numeros.forEach(sumarDos)
const arrayMap = numeros.map(sumarDos)

const pares = numeros.filter(num => num%2 === 0) //el %2 es como decir "el resto 2 o mudolo 2"
//console.log(pares)

const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0) //es decir el acumulador inicial sera 0 y 5 el valor actual | 0, 5 | 5, 10 | 15, 20
//console.log(suma)

const numeritos = [1, 2, 3];
const suma2 = numeritos.reduce((acumulador, valorActual) => acumulador + valorActual, 1)
console.log(suma2)

//console.log(arrayForEach)
//console.log(arrayMap)

//numeros.forEach(num => {
// console.log(num)
//})
