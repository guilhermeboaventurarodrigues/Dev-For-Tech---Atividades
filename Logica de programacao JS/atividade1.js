const input = require("readline-sync");

var umreal = input.question("Quantas moedas de 1 real voce tem? ");
var cinquentacents = input.question("Quantas moedas de 50 centavos voce tem? ");
var vintecincocents = input.question("E de 25 centavos? ");
var dezcents = input.question("E de 10 centavos? ");
var cincocents = input.question("E de 5 centavos? ");
var umcents = input.question("E de 1 centavo? ");

umreal *= 1;
cinquentacents *= 0.5;
vintecincocents *= 0.25;
dezcents *= 0.1;
cincocents *= 0.05;
umcents *= 0.01;

var valorEmReal =
  umreal + cinquentacents + vintecincocents + dezcents + cincocents + umcents;

var valorProduto = input.question(
  "Qual o valor do produto que voce deseja comprar? "
);

if (valorProduto <= valorEmReal) {
  console.log(
    `Você consegue comprar esse produto, voce tem ${valorEmReal} reais, e esse produto custa ${valorProduto} reais`
  );
} else {
  console.log(`Voce NAO consegue comprar esse produto`);
}
