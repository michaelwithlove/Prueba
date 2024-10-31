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

//forEach - METODOS FILTER Y MAP
const sumarDos = num => console.log(num + 2)

const arrayForEach = numeros.forEach(sumarDos)
const arrayMap = numeros.map(sumarDos)

const pares = numeros.filter(num => num%2 === 0) //el %2 es como decir "el resto 2 o mudolo 2"
//console.log(pares)

//METODO REDUCE
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0) //es decir el acumulador inicial sera 0 y 5 el valor actual | 0, 5 | 5, 10 | 15, 20
//console.log(suma)

const numeritos = [1, 2, 3];
const suma2 = numeritos.reduce((acumulador, valorActual) => acumulador + valorActual, 1)
//console.log(suma2)

let acumuladora = 0

numeritos.forEach(num => {
    acumuladora = num + acumuladora
})
console.log(acumuladora)

//METODO FIND
//se consideran arrays
const buscar = numeros.find(num => num === 25)
console.log(buscar)

const indice = numeros.findIndex(num => num === 25)
console.log(indice)

//OBJETOS - (a traves del "." accederemos a los metodos funcionales, se requiere por lo menos un parametro como minimo)
// se interpretan como arrays despues del "="
const persona = {
    nombre: 'Miguel',
    edad: 23,
    apellido: 'Díaz',
}

//console.log(Object.keys(persona))

//o

const clavesPersona = Object.keys(persona)
console.log(clavesPersona)

//o VALUE que muestra el valor de la clave del objeto (clave: nombre -> valor: Miguel)

const valorPersona = Object.values(persona)
console.log(valorPersona)


//ASSIGN es util para combinar objetos o clonar un objeto con propiedades enumerables y propias
const persona2 = {
    nombre: 'Agustin',
    Nacionalidad: 'Argentina'
}

const newObj = Object.assign(persona, persona2)
console.log(newObj)

//FREEZE es util para prevenir que nuevas propiedades sean añadidas a el, y hace todas las propiedades existentes no configurables
Object.freeze(persona2)

persona2.casado = true

console.log(persona2)