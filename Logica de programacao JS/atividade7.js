const input = require("readline-sync");

var lerUsuario = input.question("Digite seu usuario: ");
var lerSenha = input.question("Digite sua senha: ");

if (lerSenha == "batatafrita") {
  console.log("ACESSO PERMITIDO");
} else {
  console.log("ACESSO NEGADO. SENHA INCORRETA");
}
