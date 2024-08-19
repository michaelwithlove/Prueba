
//STRINGIFY
const persona = {
    nommbre: 'luis',
    edad: 35
}
//console.log(persona)
//console.log(typeof (persona))

const jsonPersona = JSON.stringify(persona) 
//typeof - nos permite verificar que tipo de objeto js es el nodo al que se le aplica
//console.log(jsonPersona)
//console.log(typeof (jsonPersona))    


//PARSE
const jsonString = '{"nombre": "Miguel", "edad":20}'

//console.log(jsonString)
//console.log(typeof (jsonString))

const persona2 = JSON.parse(jsonString)
//console.log(persona2)
//console.log(typeof (persona2))

//SETITEM - envia y almacena datos en LOCALSTORAGE (no es necesario escribir una variable)
localStorage.setItem('nombre', JSON.stringify(persona2))

//GETITEM - devuelve, retorna o trae un dato del LOCALSTORAGE (es necesario escribir una variable para que sea mas legible el dato)
const datos = localStorage.getItem('nombre')
console.log(datos)

//REMOVEITEM - elimina un dato almacenado en LOCALSTORAGE
localStorage.removeItem('nombre')

//CLEAR - elimina todos los datos del LOCALSTORAGE
localStorage.clear()