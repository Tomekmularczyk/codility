const path = require("path");
const chokidar = require("chokidar");
const chalk = require("chalk");
const clearModule = require("clear-module");

// clear terminal
process.stdout.write("\033c");

const getFormattedTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

// One-liner for current directory
const watcher = chokidar
  .watch("./src", {
    ignored: /test.js/
  })
  .on("ready", () =>
    console.log(chalk.underline("Scan complete. Ready for changes..."))
  );

watcher.on("change", filePath => {
  const time = getFormattedTime();
  const fullPath = path.join(__dirname, filePath);
  console.log(chalk.gray(`${time} - ${filePath} has been changed`));

  require(fullPath);
  clearModule(fullPath);
});
