const titulo = document.querySelector('h1')
const texto = 'JSON localStorage y Eventos'
titulo.innerText = texto.toUpperCase()

const container = document.createElement('div')
document.body.append(container)

//const datos = JSON.parse(localStorage.getItem('autos'))

let datos = localStorage.getItem('autos')
datos = JSON.parse(datos)
//console.log(datos)

const arrayCorregido = datos.reverse().map(elemento => {
    return {
        marca: elemento.marca,
        modelo: elemento.modelo,
        anio: elemento.anio,
        color: elemento.color,
        precio: elemento.precio,
    }
})

//localStorage.setItem('autos', JSON.stringify(arrayCorregido))

let mostrarDatos = '';

datos.forEach(element => {
    mostrarDatos += `
                <div class='card'>
                    <h3>${element.marca}</h3>
                    <p>${element.modelo}</p>
                    <p>${element.anio}</p>
                    <p>${element.color}</p>
                    <p>${element.precio}</p>
                </div>
                `
});

container.innerHTML = mostrarDatos
