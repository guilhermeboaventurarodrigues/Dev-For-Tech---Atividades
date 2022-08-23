const input = require("readline-sync");

var textoDigitado = input.question("Digite uma frase: ");

if (textoDigitado.charAt(0) === textoDigitado.charAt(0).toUpperCase()) {
  console.log("A PRIMEIRA LETRA E MAIUSCULA");
} else {
  console.log("A PRIMEIRA LETRA NAO E MAIUSCULA");
}
