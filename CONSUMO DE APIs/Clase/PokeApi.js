const container = document.querySelector('.container')

container.innerHTML = 'Hola mundo!'

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(Response => Response.json())
    //.then(data => console.log(data.results))
    .then(data => {
        let datos = ''
        data.results.forEach(element => {
            console.log(element.name)
            datos += `<h3>${element.name}</h3>` //+= es concatenacion de texto, ponemos las ``para manipular la visualizacion del innerHtml? y llamamos el elemento con ${}
        });
        container.innerHTML = datos
    })
    .catch(err => console.error(err))