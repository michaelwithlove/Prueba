
//OPERADOR TERNARIO
let edad = 15

let mayorDeEdad = (edad >= 18) ? 'SI':'NO';
console.log(mayorDeEdad)

//TYPEOF
console.log(typeof mayorDeEdad)
console.log(typeof (edad))

//SPREAD OPERATOR
//ARRAYS
const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

console.log(numerosImpares.concat(numerosPares))
//o
console.log([...numerosImpares, ...numerosPares])

//FUNCION
function suma(a, b, c) {
    return a + b + c
}

const numeros = [1, 2, 3]
console.log(suma(...numerosPares))
//o
console.log(numerosImpares[0], numerosImpares[1], numerosImpares[2])

//OBJETOS
const obj1 = { a:1 , b:2}
const obj2 = { c:3 , d:4}

console.log({...obj1, ...obj2})

//VALORES BOOLEANOS
console.log(Boolean(-80))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean('algo'))

//VALORES POR DEFECTO
// ||

//let input; //null, undifined ya que input no esta definido o si ponemos unvalor falsy
let input = 0 //'' o null o undifined

let dato = input || 'valor no definido aún'
console.log(dato)

//??
let dato2 = input ?? 'veamos que recibe' //solo va a tirar el mensaje si el input tiene un valor falsy
console.log(dato2)

//valores por defecto en una funcion
const saludar = (nombre = 'invitado') => {
    console.log(`Hola ${nombre}`)
}

//saludar()
//saludar('Miguel') //me devuelve el valor gracias al parametro ${nombre}

//VALORES DE ENCADENAMIENTO OPCIONAL
const persona = {
    nombre: 'Miguel',
    edad: 23
};

const apellido = persona.apellido?.principal
//const apellido = persona.apellido.principal // esto genera un error

console.log(apellido)

//Destructuracion
