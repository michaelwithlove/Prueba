const form = document.querySelector('form')
const pEdad = document.querySelector('.d-edad')
const pNombre = document.querySelector('.d-nombre')

function comprobarDato(obj, Key) {
    console.log(obj[Key])
    if (obj[Key].length === 0) {
        
        if (Key === 'Nombre' && obj['Nombre'].length === 0) {
            pNombre.classList.toggle('danger')
        }
        if (Key === 'Edad' && obj['Edad'].length === 0) {
            pEdad.classList.toggle('danger')
        }

        throw new Error(`Hay un error en el input ${Key}`)
    }
    return true
}

form.addEventListener('submit', function(event){
    pNombre.classList.add('danger')
    pEdad.classList.add('danger')
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    Object.keys(data).forEach(Key => {
        try {
            comprobarDato(data, Key)   
        } catch (error) {
            console.log(error)
        }
    })
})