// // // function sum(a, b) {
// // //   if (a > 0) {
// // //     let c = 0;
// // //     console.log(c);
// // //   }
// // //   var d = 100;
// // //   var d = 1000;
// // //   console.log(d + 10);
// // //   return a + b;
// // // }
// // // let result = sum(1, "2");
// // // let results = [1, "1", true];
// // // console.log(results);
// // // import "readline";
// // // function greet(user) {
// // //   if (user.gender == "Male") {
// // //     console.log("Hey Mr.", user.name);
// // //     console.log("Your age is ", user.age);
// // //   } else if (user.gender == "Female") {
// // //     console.log("Hey Ms.", user.name);
// // //     console.log("Your age is ", user.age);
// // //   }
// // //   for (let i in user) {
// // //     console.log(user[i]);
// // //   }
// // //   console.log(Object.keys(user).length);
// // //   console.log(typeof Object.values(user));
// // //   console.log(Object.values(user));
// // // }
// // // user1 = {
// // //   name: "Varun",
// // //   age: 21,
// // //   gender: "Male",
// // // };
// // // greet(user1);
// // // const arr = [0, 1, 2, 3, 4, 5];
// // // const result = arr.filter(oddEven);
// // // console.log(result);
// // // function oddEven(num) {
// // //   return num % 2 === 0;
// // // }
// // // function assignment(users) {
// // //   // console.log("G");
// // //   // if (users[i].Age > 18 && users[i].Gender === "Male") {
// // //   //   // console.log("G");
// // //   //   console.log(users[i].Name);
// // //   // }
// // //   return users.Age > 18 && users.Gender === "Male";
// // // }
// // // users = [
// // //   { Name: "Varun", Age: 21, Gender: "Male" },
// // //   { Name: "LOL", Age: 20, Gender: "Female" },
// // //   { Name: "Kek", Gender: "Male", Age: 17 },
// // // ];
// // // assignment(users);
// // // users2 = users.filter(assignment);
// // // console.log(users2);

// // // console.log(users);
// // const fs = require("fs");
// // function print(err, data) {
// //   console.log(err);
// //   console.log(data);
// // }
// // // const result = fs.readFileSync("a.txt", "utf-8", print);
// // const result2 = fs.readFile("b.txt", "utf-8", print);
// // // console.log(result);
// // // // console.log(result);
// // console.log(result2);
// // // console.log("Done");

// // // function timeout() {
// // //   console.log("Click");
// // // }
// // // console.log("Hi");
// // // setTimeout(timeout, 1000);
// // // console.log("YO");
// // // let c = 0;
// // // for (let i = 0; i < 1000000000; i++) {
// // //   c = c + 1;
// // // }
// // // console.log(c);
// // // function run() {
// // //   console.log("I will run after 1s");
// // // }

// // // function runn() {
// // //   console.log("I will run after 10s");
// // // }

// // // setTimeout(run, 1000);

// // // setTimeout(runn, 1);
// // // console.log("I will run immedietely");

// // // function sum(a, b) {
// // //   return a + b;
// // // }

// // // function multiply(a, b) {
// // //   return a * b;
// // // }

// // // function subtract(a, b) {
// // //   return a - b;
// // // }

// // // function divide(a, b) {
// // //   return a / b;
// // // }

// // // function doOperation(a, b, op) {
// // //   return op(a, b);
// // // }

// // // console.log(doOperation(1, 2, sum));

// //setTimeoutPromisified()
// // function setTimeoutPromisified() {
// //   return new Promise((resolve, reject) => {});
// // }

// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     return area;
//   }

//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 4);
// const area = rect.area();
// console.log(rect.color);
// const user = new Map();
// user.set("name", "Varun");
// user.set("age", 21);
// console.log(user);
user1 = new Map();
user2 = new Map();
user1.set("a", 1);
user1.set("b", 1);
user2.set("a", 1);
user2.set("b", 1);
// console.log(user1 == user2);
// console.log(user1, user2);
// arr = [1, 2];
// arr2 = [2, 1];
// console.log(arr == arr2);
for (let i in user1) {
  console.log(user1[i]);
}
console.log(user1);
