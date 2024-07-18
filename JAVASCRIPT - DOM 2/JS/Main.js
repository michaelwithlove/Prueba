//TRAER LOS TITULOS QUERYSELECTOR
//const titulo = document.querySelector('h1')
//console.log(titulo)

//TRAER LOS PARRAFOS (parecen arrays pero no son, en realidad es un node list) QUERYSELECTORALL
//const parrafos = document.querySelectorAll('p')
//console.log(parrafos
//TAMBIEN SE PUEDEN TRAER DE FORMA INDIVIDUAL
//const parrafos = document.querySelectorAll('p')
//parrafos.forEach(parrafos=>console.log(parrafos)

//EJEMPLO DE CREACION DE ARRAYS
//const arrayCualquiera = new Array()
//arrayCualquiera.push(2)
//console.log(arrayCualquiera

//PERO PODEMOS CONVERTIR LOS PARRAFOS EN ARRAYS
//const arrayCualquiera = new Array()
//arrayCualquiera.push(2)
//console.log(arrayCualquiera)
//console.log(Array.from(parrafos)

//TRAER ELEMENTOS ESPECIFICOS DEL DOM
//.links-numerados>li trae los hijos directos de un elemento padre
//.links-numerados li trae los hijos, nietos, bisnietos del elemento principal
//const links = document.querySelectorAll('.links-numerados>li')
//console.log(links)


//INNERHTML
//PUEDE REESCRIBIR CODIGO HTML DE FORMA POTENTE LLEGANDO A SOBREESCRIBIR TODO LO QUE SE HIZO EN EL INDEX.HTML
//const body = document.body
//body.innerHTML = 'Nuevo Body'

//EJEMPLO DE CAMBIO DE ESTILO
//const body = document.querySelector('h1')
//body.innerHTML = 'Nuevo HTML <span id="span-title> HTML </span>'
//const span = document.querySelector('#span-title')
//span.style.color = 'red'

//EJEMPLO DE CAMBIO DE PARRAFO
//const parrafos = document.querySelectorAll('p')
//console.log(parrafos[0])
//parrafos[1].innerText = "Texto ingresado desde Js"

//parrafos.forEach((parrafo, index) =>{
//    parrafo.innerText = `Texto desde Js ${index}`
//})
 

//INNERTEXT
//titulo.innerText = 'Nuevo Html'

//CREAR ELEMENTOS
//const menu = document.querySelector('.menu')
//const loginLi = document.createElement('li')
//loginLi.innerText = 'Inciar Sesión'
//menu.append(loginLi)

//EJEMPLO DE CREAR ELEMENTOS EN MODO FUNCION
const crearElemento = (contenedor, tagName, text, idElement) => {
    const element = document.createElement(tagName)
    element.innerText = text
    element.setAttribute('id', `att-${idElement}`)
    element.setAttribute('class', 'h5-element')
    contenedor.append(element)
} 

const tecnologias = [
    "React",
    "Angular",
    "Vue.js",
    "Ember.js",
    "Backbone.js",
    "jQuery",
    "D3.js",
    "Three.js",
    "Express.js",
    "Meteor",
    "Electron",
    "Knockout.js",
    "Polymer",
    "Mithril",
    "Preact",
    "Riot.js",
    "Aurelia",
    "Svelte",
    "Nest.js",
    "Feathers.js",
    "Koa",
    "Next.js",
    "Nuxt.js",
    "Gatsby",
    "Stimulus"
];

const contenedor = document.querySelector('#FrameworksAndLibrary')
tecnologias.forEach((tecnologia, index) => {
    crearElemento(contenedor, 'h5', tecnologia, index)
})

//ALTERNATIVA DE CREAR ELEMENTO
//let datos = ''
//
//tecnologias.forEach (elemento => {
//    datos +=`<h5 style="color: green;">${elemento}</h5>`
//})
//const contenedor2 = document.querySelector('.clients')
//contenedor2.innerHTML = datos

//REMOVER ATRIBUTOS
const frameworks = document.querySelector('#FrameworksAndLibrary')
const Angular = frameworks.querySelector('#att-1')
console.log(Angular)
Angular.removeAttribute('class')

//CLASSLIST ESTILIZAR
const Ember = frameworks.querySelector('#att-3')
Ember.classList.add('color-green')
Ember.classList.remove('h5-element')
console.log(Ember.classList.contains('red'))


