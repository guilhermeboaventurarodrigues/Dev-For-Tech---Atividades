const input = require("readline-sync");

var lerInput = input.question(
  "Digite um DDI e saiba o nome do pais correspondente: "
);

// TENTEI FAZER COM O SWITCH CASE E NAO CONSEGUI :(

if (lerInput == 1) {
  console.log("Estados unidos");
} else if (lerInput == 49) {
  console.log("Alemanha");
} else if (lerInput == 54) {
  console.log("Argentina");
} else if (lerInput == 55) {
  console.log("Brasil ");
} else if (lerInput == 35) {
  console.log("Portugal");
} else {
  console.log("DDI não cadastrado ou inválido");
}
