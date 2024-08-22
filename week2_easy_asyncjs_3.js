// const fs = require("fs");
// fs.readFile("b.txt", "utf-8", function greet(err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

setTimeout(() => {
  console.log("hihihihi");
}, 1000);

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
setTimeout(() => {
  console.log("g");
}, 1000);
setTimeout(() => {
  console.log("hey");
}, 15000);
