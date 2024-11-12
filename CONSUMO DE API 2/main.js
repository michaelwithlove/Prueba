const container = document.querySelector('tbody')
const formulario = document.querySelector('form')

function cargarDatos () {
fetch(`https://672bb5cf1600dda5a9f617ba.mockapi.io/Users`)
    .then(Response => Response.json())
    .then(data => {
        let datos = ''
        data.forEach( user => {
            let fecha = new Date(user.fecha)
            fecha = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
            datos += ` 
                    <tr id= 'row-${user.id}'>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.curso}</td>
                        <td>${fecha}</td>
                        <td>
                            <a href="edit.html" class="buttons btn-edit" data-id="${user.id}" id="edit-${user.id}">Edit</a>
                            <button class="buttons btn-delete" data-id="${user.id}" id="delete-${user.id}">Delete</button>
                        </td>
                    </tr>
            `
        });
        if(container){
            container.innerHTML = datos

        }
    })
    .then(()=> {
        const btnsDelete = document.querySelectorAll('.btn-delete')
        const btnsEdit = document.querySelectorAll('.btn-edit')
        btnsDelete.forEach(btn => {
            const id = btn.getAttribute('data-id')
            deleteDato(id)
        })
        btnsEdit.forEach(btn => {
            const id = btn.getAttribute('data-id')
            editarDato(id)
        })
    }
    )
    .catch(err => console.error(err));    
}

function crearDatos() {
    formulario.addEventListener('submit', function(event){
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))
        data.fecha = Date.now()
        
        fetch('https://672bb5cf1600dda5a9f617ba.mockapi.io/Users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(cargarDatos)
        .catch(err => console.error(err))
    })
}

function deleteDato(id) {
    const btn = document.querySelector(`#delete-${id}`)
    const row = document.querySelector(`#row-${id}`)
    btn.addEventListener('click', function() {
        row.remove()
        fetch(`https://672bb5cf1600dda5a9f617ba.mockapi.io/Users/${id}`, {
            method: 'DELETE'
        })
        .then(() => console.log('Elemento Eliminado'))
        .catch(error => console.log(error))
    })
}

function editarDato(id) {
    const btn = document.querySelector(`#edit-${id}`)

    btn.addEventListener('click', function() {
        window.location.href = 'edit.html'
        const editForm = document.querySelector('.form-edit')
        
        setTimeout(() => {
            const subtitulo = document.querySelector('.user')
            subtitulo.textContent = `# ${id}`
            
            editForm.addEventListener('submit', function(event){
                event.preventDefault()
                const data = Object.fromEntries(new FormData(event.target))
                data.fecha = Date.now()
                
                fetch(`https://672bb5cf1600dda5a9f617ba.mockapi.io/Users/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/json' 
                    },
                    body: JSON.stringify(data)
                })
                .then(() => {
                    window.location.href = 'index.html'
                })
                .catch(error => console.log(error))
              },2000)
            })
        //fetch(`https://672bb5cf1600dda5a9f617ba.mockapi.io/Users/${id}`, {
        //    method: 'PUT',
        //    headers: {
        //        'Content-Type':'application/json' 
        //    },
        //    body: JSON.stringify(data)
        //})
        //.then(() => cargarDatos())
        //.catch(error => console.log(error))
        })
    }

function main() {
    cargarDatos()
    crearDatos()
    deleteDato()
}

main()
