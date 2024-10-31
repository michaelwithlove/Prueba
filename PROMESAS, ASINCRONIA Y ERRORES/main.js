const titulo = document.createElement('h1')
const container = document.querySelector('.container')

titulo.textContent = 'Async'
titulo.style.textAlign = 'center'
document.body.before(titulo)

const valor = 9
try {
    console.log(5/valo)
} catch (error) {
    console.error(error.message)
}

container.innerText = 'Cargando...'

//async
setTimeout(() => {
    container.innerHTML = '<h2>Contenido Cargado</h2>'
}, 3000)

function randomOperation() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const numRandom = Math.floor (Math.random() * 10)
            console.log(numRandom)
            if (numRandom > 5) {
                reject(new Error(`El numero ${numRandom} es mayor a 5`))
            } else {
                resolve(`el numero es: ${numRandom}`)
            }
        }, 3000)
    })
}

//then catch
randomOperation()
    .then(result => console.log(result))
    .catch(error => console.error(error.message))