const arrayFrutas = ['frutilla', 'mango', 'manzana' ]

//JSON.stringify()

const jsonFrutas = JSON.stringify(arrayFrutas) //PERMITE CONVERTIR DATOS JS A DATOS JSON

console.log (arrayFrutas) //MUESTRA LOS DATOS EN FORMATO JS

console.log (jsonFrutas) //MUESTRA LOS DATOS EN FORMATO JSON

//JSON.parse()

const jsonObjeto =  '{"nombre": "Juan Pérez", "edad": 30, "email": "juan.perez@example.com"}';
//console.log(jsonObjeto.nombre) //MUESTRA DATOS JSON

const Objeto = JSON.parse(jsonObjeto) //PERMITE CONVERTIR DATOS JSON A JS
console.log(Objeto.nombre) //MUESTRA DATOS JS

//localStorage

//localStorage.setItem('nombre', 'Miguel')
//localStorage.setItem('apellido', 'Díaz')
//
//console.log(localStorage.getItem('nombre'))
//localStorage.removeItem('apellido')

const usuario = {
    nombre: "Juan Pérez",
    edad: 30,
    email: "juan.perez@example.com"
}

//localStorage.setItem('usuario', usuario) //así no se guardara con el value correcto en el localStorage por no estar guardado en formato texto

localStorage.setItem('usuario', JSON.stringify(usuario))
//console.log(localStorage.getItem(usuario)) //similar a lo anterior, no reconoce ese formato sino formato txt (string)
console.log(localStorage.getItem('usuario'))