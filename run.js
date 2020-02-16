const path = require("path");
const chokidar = require("chokidar");
const clearModule = require("clear-module");

process.stdout.write("\033c");

// One-liner for current directory
const watcher = chokidar
  .watch("./src", {
    ignored: /test.js/
  })
  .on("ready", () => console.log("Scan complete. Ready for changes..."));

watcher.on("change", filePath => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const fullPath = path.join(__dirname, filePath);

  console.log(`${time} - ${filePath} has been changed`);

  require(fullPath);
  clearModule(fullPath);
});
