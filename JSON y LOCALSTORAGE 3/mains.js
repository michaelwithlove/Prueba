let productos = null
productos = [
    { "id": 1, "nombre": "Camiseta básica", "precio": 19.99, "cantidad": 50 },
    { "id": 2, "nombre": "Pantalón jeans", "precio": 39.99, "cantidad": 30 },
    { "id": 3, "nombre": "Sudadera con capucha", "precio": 29.99, "cantidad": 40 },
    { "id": 4, "nombre": "Chaqueta de cuero", "precio": 99.99, "cantidad": 10 },
    { "id": 5, "nombre": "Vestido floral", "precio": 49.99, "cantidad": 20 },
    { "id": 6, "nombre": "Zapatillas deportivas", "precio": 59.99, "cantidad": 25 },
    { "id": 7, "nombre": "Sombrero de ala ancha", "precio": 24.99, "cantidad": 15 },
    { "id": 8, "nombre": "Guantes de cuero", "precio": 19.99, "cantidad": 35 },
    { "id": 9, "nombre": "Bufanda de lana", "precio": 14.99, "cantidad": 40 },
    { "id": 10, "nombre": "Abrigo de invierno", "precio": 119.99, "cantidad": 8 },
    { "id": 11, "nombre": "Falda plisada", "precio": 34.99, "cantidad": 22 },
    { "id": 12, "nombre": "Blusa de seda", "precio": 44.99, "cantidad": 18 },
    { "id": 13, "nombre": "Cinturón de cuero", "precio": 12.99, "cantidad": 60 },
    { "id": 14, "nombre": "Chaleco acolchado", "precio": 69.99, "cantidad": 12 },
    { "id": 15, "nombre": "Traje de baño", "precio": 29.99, "cantidad": 28 }
];

const tbody = document.querySelector('table>tbody')

function cargarlocalStorage(key, array){
  localStorage.setItem(key, JSON.stringify(array))
}

function obtenerDatosLocalStorage(key){
  const array = JSON.parse(localStorage.getItem(key))
  if (array === null) return []
  return array
}

function existeKeyLocalStorage(key){
    if (key === null) return false
    return true
}

function cargarDatosEnHtml(array, contenedor) {
  let datos = ''

    array.forEach(producto => {
        datos += `<tr id="producto-${producto.id}">
                    <th>${producto.id}</th>
                    <th>${producto.nombre}</th>
                    <th>${producto.precio}</th>
                    <th>${producto.cantidad}</th>
                </tr>`
    });

    contenedor.innerHTML = datos
  }

function main () {
  const contenedorAsync = document.querySelector('.contenidoAsync')
  contenedorAsync.innerHTML = '<h3>Cargando...</h3>'
    setTimeout (() => {
      contenedorAsync.innerHTML = '<h3>Contenido cargado</h3>'
    }, 3000)
  if(!existeKeyLocalStorage('productos')){
    cargarlocalStorage('productos', productos)
  }
    const data = obtenerDatosLocalStorage('productos')
    cargarDatosEnHtml(data, tbody)
    
}

main()
  