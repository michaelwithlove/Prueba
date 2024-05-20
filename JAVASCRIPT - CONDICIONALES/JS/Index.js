console.log("Hola mundo")

//Condicionales

//If - dentro del parentesis iría la condicion y en las llaves el resto del codigo

if (false) {
    console.log("Dentro del if");
  }
  
  let nombre = "Fran";
  
  // Condiciones
  // Igualar simple (==)
  let condicion = nombre == "Juan";
  let condicionConNumeros = 10 == "10";
  
  if (condicion) {
    console.log("Pudiste pasar");
  }
  
  // Igualar estricto (===)
  let condicionEstricta = 10 === "10";
  
  if (condicionEstricta) {
    console.log("Pudiste entrar al if estricto");
  }
  
  // Desigual simple (!=)
  let desigualConNumeros = 10 != "9";
  
  if (desigualConNumeros) {
    console.log("Pudiste entrar al if desigual");
  }
  
  // Desigual estricto (!==)
  let desigualEstrictoConNumeros = 10 !== "10";
  
  if (desigualEstrictoConNumeros) {
    console.log("Pudiste entrar al if desigual estricto");
  }
  
  // mayor que (>) y menor que (<)
  let number = 5;
  
  if (number > 5) {
    console.log("El numero es mayor a 5");
  }
  
  if (number < 5) {
    console.log("El numero es menor a 5");
  }
  
  // mayor o igual que (>=) y menor o igual que (<=)
  if (number >= 5) {
    console.log("El numero es mayor o igual a 5");
  }
  
  if (number <= 5) {
    console.log("El numero es menor o igual a 5");
  }
  
  // else (excepcion a los if)
  let apellido = "Fernandez";
  
  if (apellido == "Lopez") {
    console.log("Esta permitida tu entrada");
  } else {
    console.log("Tu entrada no esta permitida");
  }
  
  // else if (anidacion de condicion)
  if (apellido == "Perez") {
    console.log("Esta permitida tu entrada");
  } else if (apellido == "Fernandez") {
    console.log("Esta permitida tambien tu entrada");
  } else {
    console.log("Tu entrada no esta permitida");
  }
  
  // Operadores de condicion
  
  // Not (!)
  let condicional = false;
  let nombreCondicion = "";
  
  if (!nombreCondicion) {
    console.error("NombreCondicion no existe");
  }
  
  // OR ||
  if (apellido == "Perez" || apellido == "Fernandez" || apellido == "Martinez") {
    console.log("Esta permitida tu entrada con OR");
  } else {
    console.log("Tu entrada no esta permitida");
  }
  
  // AND &&
  if (nombre == "Juan" && apellido == "Perez") {
    console.log("Esta permitida tu entrada con OR");
  } else {
    console.log("Tu entrada no esta permitida");
  }
 