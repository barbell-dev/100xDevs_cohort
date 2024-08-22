const fs = require("fs");
function callback() {
  console.log("Promisified writeFile has been executed.");
}
let i = 0;
function writeFilePromisified() {
  return new Promise((resolve, reject) => {
    const content = "Hi , I am  new content";
    const write = fs.writeFile("a.txt", content, "utf-8", resolve());

    // console.log(read);
    // setTimeout(resolve, 3000);
  });
}
writeFilePromisified().then(callback);
//promisified  version of cleanFile() that
