const input = require("readline-sync");

var valorProduto = input.questionInt("Digite o valor do produto: ");
var formaDePagamento = input.questionInt(
  "Qual a forma de pagamento? 1: A vista em dinheiro ou cheque (10% de desconto) / 2: A vista no cartao de credito (15% de desconto) / 3: Em 2x no cartao (Preco normal) / 4: Em 4x no cartao (Preco normal mais juros de 10%) "
);
if (valorProduto > 0) {
  if (formaDePagamento == 1) {
    var valorDesconto = valorProduto * 0.1;
    valorProduto = valorProduto - valorDesconto;
    console.log(`Valor a em dinheiro c/10% de desconto: ${valorProduto}`);
  } else if (formaDePagamento == 2) {
    var valorDesconto = valorProduto * 0.15;
    valorProduto = valorProduto - valorDesconto;
    console.log(`Valor no credito c/15% de desconto: ${valorProduto}`);
  } else if (formaDePagamento == 3) {
    var precoParcela = valorProduto / 2;
    console.log(
      `Valor em 2x no cartao: ${valorProduto}, 2 parcelas de ${precoParcela}`
    );
  } else if (formaDePagamento == 4) {
    var valorJuros = valorProduto * 0.1;
    valorProduto += valorJuros;
    var valorParcelas = valorProduto / 4;
    console.log(
      `Valor em 4x c/10% de juros: ${valorProduto}, 4 parcelas de ${valorParcelas}`
    );
    console.log(valorJuros);
  } else {
    console.log("Opcao invalida");
  }
} else {
  console.log("Digite um valor positivo!");
}
