const fs = require("fs");
// let str = "hello     world    my    name   is       raman";
// console.log(str);
function print(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  return data;
}
let str = fs.readFileSync("a.txt", "utf-8");
// let temp_array = str.split(" ")
// console.log(str);
// if (str != undefined) {
// console.log(str);
// }
let temp = str.split(" ");
console.log(temp);
let ans = "";
for (let i = 0; i < temp.length; i++) {
  if (temp[i] != " " && temp[i].length > 0) {
    if (i == temp.length - 1) {
      ans += temp[i];
      break;
    }
    ans += temp[i] + " ";
  }
}
fs.truncateSync("a.txt", 0, function truncated() {
  console.log("File has been truncated.");
});
fs.writeFileSync("a.txt", ans, "utf-8");
fs.readFile("a.txt", "utf-8", (err, data) => {
  err ? console.log(err) : console.log(data);
});
console.log("done");
