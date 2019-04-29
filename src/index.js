const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./lib/flies");
const inquirer = require("./lib/inquirer");

clear();
console.log(
  chalk.green(
    figlet.textSync("GitStart", {
      horizontalLayout: "full"
    })
  )
);

// if (files.directoryExists(".git")) {
//   console.log(chalk.red("Already a git repository!"));
//   process.exit();
// }

const run = async () => {
  const credentials = await inquirer.askGitHubCredentials();
  console.log(credentials);
};

run();
