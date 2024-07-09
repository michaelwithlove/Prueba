//TRAER LOS TITULOS
const titulo = document.querySelector('h1')
console.log(titulo)

//TRAER LOS PARRAFOS (parecen arrays pero no son, en realidad es un node list)
//const parrafos = document.querySelectorAll('p')
//console.log(parrafos)

//TAMBIEN SE PUEDEN TRAER DE FORMA INDIVIDUAL
//const parrafos = document.querySelectorAll('p')
//parrafos.forEach(parrafos=>console.log(parrafos))

//EJEMPLO DE CREACION DE ARRAYS
//const arrayCualquiera = new Array()
//arrayCualquiera.push(2)
//console.log(arrayCualquiera)

//PERO PODEMOS CONVERTIR LOS PARRAFOS EN ARRAYS
//const arrayCualquiera = new Array()
//arrayCualquiera.push(2)
//console.log(arrayCualquiera)
//console.log(Array.from(parrafos))

//TRAER ELEMENTOS ESPECIFICOS DEL DOM
//.links-numerados>li trae los hijos directos de un elemento padre
//.links-numerados li trae los hijos, nietos, bisnietos del elemento principal
//const links = document.querySelectorAll('.links-numerados>li')
//console.log(links)


//INNERHTML
//PUEDE REESCRIBIR CODIGO HTML DE FORMA POTENTE LLEGANDO A SOBREESCRIBIR TODO LO QUE SE HIZO EN EL INDEX.HTML
//const body = document.body
//body.innerHTML = '<h1>Nuevo HTML</h1>'


//INNERTEXT
titulo.innerText = 'Nuevo Html'