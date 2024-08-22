const fs = require("fs");
function callback() {
  console.log("File has been cleaned.");
}
function cleanFilePromisified(file) {
  return new Promise((resolve, reject) => {
    let content = fs.readFileSync(file, "utf-8");
    let ans = content.trim(" ");

    console.log(ans);
    fs.writeFileSync(file, ans, "utf-8");
    let contentAfterClean = fs.readFileSync(file, "utf-8");
    console.log(contentAfterClean);
    resolve();
  });
}
cleanFilePromisified("a.txt").then(callback);
