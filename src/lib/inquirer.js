const inquirer = require("inquirer");
const files = require("./flies");
const chalk = require("chalk");

module.exports = {
  askGitHubCredentials: () => {
    const questions = [
      {
        name: "Nome do usuário:",
        type: "input",
        message: "Entre com o seu usuário do GitHub ou e-mail:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return console.log(chalk.red("Usuário inválido..."));
          }
        }
      },
      {
        name: "senha",
        type: "password",
        message: "Entre com sua senha: ",
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return console.log(chalk.red("Senha inválida"));
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
