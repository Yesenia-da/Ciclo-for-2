// creamos una bariable que nos permita saber si los numeros son positivos, negativos o multiplos de 15
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;

// Pedimos al usuario que ingrese cinco valores 
let valor1 = parseInt(prompt("Ingresa el primer valor:"));
let valor2 = parseInt(prompt("Ingresa el segundo valor:"));
let valor3 = parseInt(prompt("Ingresa el tercer valor:"));
let valor4 = parseInt(prompt("Ingresa el cuarto valor:"));
let valor5 = parseInt(prompt("Ingresa el quinto valor:"));

//  Evaluamos cada valor individualmente para que nos identifique si es positivo, negativo o multiplo de 15

// Evaluamos valor1
if (valor1 > 0) {
  positivos++;
} else if (valor1 < 0) {
  negativos++;
}
if (valor1 % 15 === 0) {
  multiplosDe15++;
}

// Evaluamos valor2
if (valor2 > 0) {
  positivos++;
} else if (valor2 < 0) {
  negativos++;
}
if (valor2 % 15 === 0) {
  multiplosDe15++;
}

// Evaluamos valor3
if (valor3 > 0) {
  positivos++;
} else if (valor3 < 0) {
  negativos++;
}
if (valor3 % 15 === 0) {
  multiplosDe15++;
}

// Evaluamos valor4
if (valor4 > 0) {
  positivos++;
} else if (valor4 < 0) {
  negativos++;
}
if (valor4 % 15 === 0) {
  multiplosDe15++;
}

// Evaluamos valor5
if (valor5 > 0) {
  positivos++;
} else if (valor5 < 0) {
  negativos++;
}
if (valor5 % 15 === 0) {
  multiplosDe15++;
}

// Mostramos los resultados al usuario
console.log(`Cantidad de valores negativos: ${negativos}`);
console.log(`Cantidad de valores positivos: ${positivos}`);
console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
