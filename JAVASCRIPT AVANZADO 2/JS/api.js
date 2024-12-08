const URL = 'https://672bb5cf1600dda5a9f617ba.mockapi.io/Users'

export async function getData(){
    const Response = await fetch(URL)
    const data = await Response.json();
    return data
}

export async function createData (body) {
    const Response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await Response.json();
    return data
}

export async function deleteData(id) {
    const Response = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
    const data = await Response.json();
    return data
}

export async function editDta(id, data) {
    const Response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(data)
    })
    const result = await Response.json();
    return data
}