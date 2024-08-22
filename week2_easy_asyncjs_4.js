const fs = require("fs");
const content = "heyyyy there";
fs.writeFile("e.txt", content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been written");
});
console.log("kek");
