import { funcionImportada } from "./funciones.js"
import persona from "./objetos.js"

const btn = document.querySelector('button')

btn.addEventListener('click', funcionImportada)

console.log(persona)