const input = require("readline-sync");

var lerInput = input.question(
  "Digite 1 para Celsius para Fahrenheit, ou Digite 2 para Farenheit para Celsius: "
);
if (lerInput == 1) {
  var valorCelsius = input.question("Digite o valor em Celsius: ");
  valorCelsius = valorCelsius * 1.8 + 32;
  console.log(valorCelsius.toFixed(2));
} else if (lerInput == 2) {
  var valorFahrenheit = input.question("Digite o valor em Farenheit: ");
  valorFahrenheit = (valorFahrenheit - 32) / 1.8;
  console.log(valorFahrenheit.toFixed(2));
} else {
  console.log("Digite uma opção valida");
}
