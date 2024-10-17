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
numeros.forEach(sumarDos)

//numeros.forEach(num => {
// console.log(num)
//})
