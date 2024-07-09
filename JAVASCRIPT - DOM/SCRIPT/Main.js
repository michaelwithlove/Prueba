//ACCESO A ELEMENTOS DEL DOM

//const links = document.querySelector('#Links');
//console.log(links)

//MODIFICACION DE ELEMENTOS DEL DOM
//MODIFICACION DE ESTILOS DE ELEMENTOS DEL DOM

//const image = document.querySelector('nav>img');
//image.alt = 'icono'

//const link1 = document.querySelector('#Link1');
//console.log(link1)
//link1.innerText = 'Home'
//link1.innerHTML = '<a href="/">Home</a>'
//link1.style.color = 'red'

//const list = document.querySelector('#Links')
//console.log(list)

//CREACION DE ELEMENTOS

//const li = document.createElement('li');
//AGREGAMOS TEXTO O ATRIBUTOS
//li.innerText = 'About'
//li.setAttribute('id', 'ultimolink')
//AGREGAMOS EL ELEMENTO AL CONTENEDOR PADRE
//list.append(li)

//AGREGAR CLASES AL ELEMENTO
//const seccionProductos = document.querySelector('.productos')
//seccionProductos.classList.add('fondo-verde')

//ELIMINA UNA CLASE DE UN ELEMENTO
//seccionProductos.classList.remove('fondo-verde')

//ALTERNA UNA CLASE A UN ELEMENTO ( SI YA TIENE LO ELIMINA O SI NO TIENE LO AGREGA)
//seccionProductos.classList.toggle('fondo-verde')

//VERIFICAR SI EL ELEMENTO TIENE UNA CLASE ESPECIFICA (DEVUELVE UN VALOR BOOLEANO)
//console.log(seccionProductos.classList.contains ('fondo-verde'))

//llamamos la ubicacion para crear el nuevo elemento "boton"
//const header = document.querySelector('header')
//creamos el elemento "boton"
//const boton = document.createElement('button');
//asignamos un texto para el boton
//boton.innerText = 'Menu';
//asociamos la creacion del elemento para que aparezca
//header.append(boton)
//asignamos un atributo al boton
//boton.setAttribute('')
//Asignamos un evento al elemento con una funcion flecha
//boton.addEventListener ('click', ()=> {
  //  console.log('boton presionado')
//})

//CONSTANTES ARRAY COMO MANIPULACION DE ELEMENTOS EN EL DOM
const arrayCualquiera = []
arrayCualquiera.push(2)
console.log(arrayCualquiera)
const parrafosArray = Array.from(parrafos)

