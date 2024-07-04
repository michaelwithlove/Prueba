const boton = document.querySelector('#miboton');
const parrafo = document.querySelector('p')

boton.addEventListener('click', function(){
    console.log('boton clickeado');
    parrafo.classList.toggle('p')
})
