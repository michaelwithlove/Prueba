//const arrayFrutas = ['frutilla', 'mango', 'manzana' ]

//JSON.stringify()

//const jsonFrutas = JSON.stringify(arrayFrutas) //PERMITE CONVERTIR DATOS JS A DATOS JSON

//console.log (arrayFrutas) //MUESTRA LOS DATOS EN FORMATO JS

//console.log (jsonFrutas) //MUESTRA LOS DATOS EN FORMATO JSON

//JSON.parse()

const jsonObjeto =  '{"nombre": "Juan Pérez", "edad": 30, "email": "juan.perez@example.com"}'
console.log(jsonObjeto.nombre) //MUESTRA DATOS JSON

const Objeto = JSON.parse(jsonObjeto) //PERMITE CONVERTIR DATOS JSON A JS
console.log(Objeto.nombre) //MUESTRA DATOS JS