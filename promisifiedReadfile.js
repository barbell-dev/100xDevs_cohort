const fs = require("fs");
function callback() {
  console.log("Promisified readFile has been executed.");
}
function readFilePromisified() {
  return new Promise((resolve, reject) => {
    const read = fs.readFile("a.txt", "utf-8", () => {
      console.log("Done reading");
    });
    // console.log(read);
    // setTimeout(resolve, 3000);
    resolve();
  });
}
readFilePromisified().then(callback);
//promisified  version of cleanFile() that
