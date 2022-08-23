//NAO ENTENDI MUITO BEM O ENUNCIADO DESSA QUESTAO

const input = require("readline-sync");

var valorEnergia = input.questionInt(
  "Qual o valor em reais da sua ultima conta de luz?"
);
var valorKw = input.questionInt("Quantos Kw foram gastos? ");

var valorPorKw = valorEnergia / valorKw;

var valorDesconto = valorEnergia * 0.1;

var valorPorKwDesconto = (valorEnergia - valorDesconto) / valorKw;

console.log(
  `Voce esta pagando ${valorPorKw.toFixed(
    2
  )}R$ por Kw/Hora, e se receber um desconto de 10% ira pagar ${valorPorKwDesconto.toFixed(
    2
  )}R$ Kw/Hora`
);
