//IF Y ELSE

//let input = prompt ("Ingrese su contraseña")
//if (input ==="123456"){
    //console.log("Contraseña correcta")
    //alert("La contraseña es correcta ✅")
//}
//else{
    //console.log("La contraseña es incorrecta")
    //alert("La contraseña es incorrecta ❌")
//}

//ELSE IF

//let valor1 = 3 < 5
//let valor2 = 3 === "3"
//if (valor1) {
    //console.log ("bloque de codigo if")
//} else if (valor2) {
  //  console.log ("bloque de codigo else if")
//} else {
  //  console.log ("bloque de codigo else")
//}

//SWITCH
//let dia = prompt("Ingrese un número del 1 al 7")
//dia = Number(dia)

//switch (dia) {
  //  case 1:
    //    console.log("lunes")
      //  break;

    //case 2:
      //  console.log("martes")
       // break;

    //case 3:
      //  console.log("miércoles")
        //break;
    
    //case 4:
      //  console.log("jueves")
        //break;

   // case 5:
     //   console.log("viernes")
       // break;
    
    //case 6:
      //  console.log("sábado")
        //break;

    //case 7:
      //  console.log("domingo")
       // break;
    //default:
      //  console.log("número invalido")
        //break;
//}

//BUCLES
const usuarios = [
    {
        username: "usuario1",
        contrasenia: "clave123"
    },
    {
        username: "johndoe",
        contrasenia: "segura#123"
    },
    {
        username: "migueld",
        contrasenia: "password999"
    }
];

for (const user of usuarios) {
    console.log(user.contrasenia)
}

let nombreDeUsuario;
let password;
let condition = false;

