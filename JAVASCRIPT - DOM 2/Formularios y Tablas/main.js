const select = document.querySelector('#cursos')
const form = document.querySelector('form')

const cursos = [
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

const cursosTabla = []

const crearElemento = (contenedor, tagName, text)=> {
    const element = document.createElement(tagName)
    element.setAttribute('value', text)
    element.innerText = text
    contenedor.append(element)
}

const crearOptions = (arr, contenedor, tagName, funcion) => {
    arr.forEach(element => {
        funcion(contenedor, tagName, element)
    });
}

//con este nodo de codigo, agregamos la info del formulario a la tabla
const cargarTabla = (arr, data) => {
   data.id = arr.length + 1
    arr.push(data)
    console.log(arr)
    //crear elementos
    const tbody = document.querySelector('#datos')
    tbody.innerHTML = ''

    arr.forEach(elemento => {
        const tr = document.createElement('tr')
        const tdId = document.createElement('td')
        const tdCurso = document.createElement('td')
        const tdHorario = document.createElement('td')

        tdId.innerText = elemento.id
        tdCurso.innerText = elemento.cursos
        tdHorario.innerText = elemento.tiempo

        tr.append(tdId, tdCurso, tdHorario)
        tbody.append(tr)
    })
}  

const formulario = () => {
form.addEventListener('submit', function(event){
    event.preventDefault() //previene el comportamiento predeterminado de la funcion submit (la cual es recargar la pagina cada vez que se oprime el boton)
    const datos = Object.fromEntries(new FormData (event.target)) //esta linea de codigo permite traer todo el formulario de forma automatica sin definir input por input (traemos todos los datos en formulario)
    cargarTabla(cursosTabla, datos)
})
}

const main = () => {
    crearOptions(cursos, select, 'option', crearElemento)
    formulario()
}

main()