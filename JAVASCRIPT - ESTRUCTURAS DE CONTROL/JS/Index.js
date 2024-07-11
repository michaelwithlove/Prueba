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
//const usuarios = [
//{
//  username: "usuario1",
//        contrasenia: "clave123"
//    },
//    {
//        username: "johndoe",
//        contrasenia: "segura#123"
//    },
//    {
//        username: "migueld",
//        contrasenia: "password999"
//    }
//];
//
//for (const user of usuarios) {
//    console.log(user.contrasenia)
//}
//
//let nombreDeUsuario;
//let password;
//let condition = false;

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
      username: "mariagomez",
      contrasenia: "password456"
  },
  {
      username: "superadmin",
      contrasenia: "admin123$$$"
  },
  {
      username: "alejandro7",
      contrasenia: "miclaveSecreta"
  }
];

for (const user of usuarios) {
  console.log(user.contrasenia)
}

let nombreDeUsuario;
let password;
let condition = true;
let contador = 1;

do {
  const nombreDeUsuario = prompt('Ingrese el usuario');

  const usuarioEncontrado = usuarios.find(user => user.username === nombreDeUsuario);

  if (usuarioEncontrado) {
      const password = prompt('Ingrese la contraseña');

      if (password === usuarioEncontrado.contraseña) {
          alert('Contraseña correcta, ingresó al sistema');
          condition = false;
      } else {
          alert('Contraseña incorrecta, intente de nuevo');
          contador++;
      }
  } else {
      alert('Usuario incorrecto, intente de nuevo');
      contador++;
  }

  if (contador > 3) {
      alert('Demasiados intentos fallidos, finalizó el programa');
      condition = false;
  }
} while (condition);