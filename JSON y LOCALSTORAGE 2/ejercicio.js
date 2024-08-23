//ejercicio 1 
const boton = document.querySelector('button')

let classStyle = localStorage.getItem('class')

if(classStyle !== null){
    document.body.classList.add(classStyle)
    if (classStyle === 'dark') {
        boton.innerText = 'light'
    } else {
        boton.innerText = 'dark'
    }
}

boton.addEventListener('click', function(){
    if(this.innerText ==='dark'){
        //console.log('si')
        this.innerText = "light"
        document.body.classList.remove('light')
        document.body.classList.add('dark')
        localStorage.setItem('class', 'dark')
    }
    else{
        //console.log('no')
        this.innerText = "dark"
        document.body.classList.remove('dark')
        document.body.classList.add('light')
        localStorage.setItem('class', 'light')
    }
})






//ejercicio 2