const container = document.querySelector('.container')

fetch(`https://672bb5cf1600dda5a9f617ba.mockapi.io/Productos`)
    .then(Response => Response.json())
    .then(data => {
        let datos = ''
        data.forEach( Element => {
            datos += ` 
            <div>
                <h2>${Element.name}</h2>
                <h2>${Element.quantity}</h2>
                <img src="${Element.avatar}" alt="${Element.name}" />
            </div>
            `
        });
        container.innerHTML = datos
    })
    .catch(err => console.error(err));
