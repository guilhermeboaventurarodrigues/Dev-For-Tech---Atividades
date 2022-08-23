const input = require("readline-sync");

var valorSalario = input.questionInt("Qual o valor do seu salario? ");
var valorEmprestimo = input.questionInt("Qual o valor do emprestimo? ");
var qtdParcelas = input.questionInt("Em quantas parcelas voce pretende pagar?");

// 100 REAIS DE JUROS POR PARCELA, INDEPENDENTE DO VALOR DO EMPRESTIMO HAHAHAHAH
var valorParcela = valorEmprestimo / qtdParcelas + 100;

var valorTotal = valorParcela * qtdParcelas;

var porcentagemSalario = valorSalario * 0.3;

if (valorSalario > 0 && valorEmprestimo > 0 && qtdParcelas > 0) {
  if (porcentagemSalario >= valorParcela) {
    console.log(
      `Emprestimo aprovado, ${qtdParcelas} parcelas de ${valorParcela.toFixed(
        2
      )} reais. Voce ira pegar um emprestimo de ${valorEmprestimo}R$ e ira pagar ${valorTotal.toFixed(
        2
      )}R$ no final. `
    );
  } else if (porcentagemSalario <= valorParcela) {
    console.log(
      "Emprestimo recusado, valor da parcela compromete mais que 30% do seu salario"
    );
  }
} else {
  console.log("Digite um valor positivo!");
}
