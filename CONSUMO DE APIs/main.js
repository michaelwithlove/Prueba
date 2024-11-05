import { Key } from "./Key.js";

const formulario = document.querySelector('form')
const container = document.querySelector('.container')

formulario.addEventListener('submit', function (event) {
    event.preventDefault ()
    const data = Object.fromEntries(new FormData(event.target))
    
fetch(`https://www.omdbapi.com/?apikey=${Key}&type=movie&s=${data.Buscar}`)
        .then(Response => Response.json())
        .then(datos => {
            let datosParseados = ''
            datos.Search.forEach(movie => {
                datosParseados += `<div>
                                        <h3>${movie.Title}</h3>
                                        <h4>${movie.Year}</h4>
                                        <img src="${movie.Poster}" alt="" />
                                    </div>`
            });
            container.innerHTML = datosParseados
        })
        .catch(err => console.error(err))
})