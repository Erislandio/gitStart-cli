const fs = require("fs");
const path = require("path");

module.exports = {
  // ! consulta p diretorio atual
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  //   * consulta se já existe o diretorio
  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};
