//Variables:

//Var (Ya no se utiliza por conveniencia)
var Nombre = "hola mundo"
//Nos permite repetir la declaracion de la variable
var nombre = "hola mundo"
var edad = 19 
//Nos permite sobreescribir el valor (cambiar el valor mientras sea del mismo tipo de dato)
var edad = 22

//Let (tambien nos permite sobreescribir el valor pero no permite repetir la declaracion de la variable)
let email = "email@gmail.com"
email = 145637

//Const (No nos permite sobreescribir el valor ni permite repetir la declaracion de la variable)
const password = "password123"

//palabras reservadas (palabras predeterminadas que tienen funcionalidades especificas)

//Mostrar Informacion en consola
//console.log (se usa para manejar errores, por ende, se borra despues de confirmar que no haya errores en el codigo)
console.log("hola mundo desde el console")
//console.info (se usa para mostrar info propia de la pagina)
console.info("hola mundo desde console")
//console.error (revela un error en la consola al momento de que un usuario no pueda logearse a odo de ejemplo)
console.error("ocurrio un error en la consola")

//Alert
alert("Ocurrio un error en el navegador")

//Mostrar info de las variables
let ejemplo = "Ejemplo de muestra"
console.log(ejemplo)
alert(ejemplo)

//Interaccion con objetos
let user = {
    nombre:"Juan",
    apellido:"Perez",
    edad: 21
}
console.log (user.nombre, user.apellido, user.edad)

//Operaciones matematicas
console.log(10+20)

//Suma
let Suma = 10 + 20

//Resta
let resta = 10 - 5

//Multiplicacion
let Multiplicacion = 10 * 20

//Division
let Division = 10 / 2

//Operaciones con otros tipos de datos

//Junta cadenas de texto cuando son strings (los espacios se muestran en la consola tambien pues son esapcios de linea de txt ocupados?)
let sumarStrings = "Hola" + "Mundo"
//Excepciones para sumar numeros y strings (junta los numeros, no los suma)
let sumaEntreNumeroYString = "10" + "20"
console.log(sumaEntreNumeroYString)