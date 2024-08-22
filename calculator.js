/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
// let temp1 = string.split(" "); //removing spaces
// let temp2 = [];
// for (let i = 0; i < temp1.length; i++) {
//   //removing empty strings ('')
//   if (temp1[i] != "") {
//     temp2.push(temp1[i]);
//   }
// }
// let temp3 = [];
// for (let i = 0; i < temp2.length; i++) {
//   if (!(temp2[i].includes("(") || temp2[i].includes(")"))) {
//     temp3.push(temp2[i]);
//     // console.log(temp3);
//   } else {
//     let noBracketString = "";
//     // console.log(temp2[i] + "kek");
//     let ref = "";
//     let end = 0;
//     for (let j = 0; j < temp2[i].length; j++) {
//       // console.log("erfuerg");
//       if (temp2[i][j] == "(" || temp2[i][j] == ")") {
//         if (j == temp2[i].length - 1) {
//           end = 1;
//           ref += temp2[i][j];
//           break;
//         }
//         temp3.push(temp2[i][j]);
//         // console.log(temp3 + "kek");
//       } else {
//         noBracketString += temp2[i][j];
//       }
//     }
//     if (noBracketString != "") {
//       temp3.push(noBracketString);
//     }
//     if (end == 1) {
//       temp3.push(ref);
//     }
//   }
// }
// if (temp3.length == 1) {
// }
// console.log(temp3);
// // for (let i = 0; i < temp3.length; i++) {
// //   if ((temp3[i] != "(" || temp3[i] != ")") && isNaN(temp3[i])) {
// //     console.log("Invalid input");
// //     break;
// //   }
// // }
// let postfix = [];
// let stack = [];
// for (let i = 0; i < temp3.length; i++) {
//   // if(!)
// }
class Calculator {
  //   static result = 0;
  constructor(result) {
    this.result = result;
  }
  add(a) {
    this.result += a;
    return this.result;
  }
  subtract(a) {
    this.result -= a;
    return this.result;
  }
  multiply(a, b) {
    this.result *= a;
    return this.result;
  }
  divide(a) {
    this.result /= a;
    return this.result;
  }
  clear() {
    this.result = 0;
    return;
  }
  getResult() {
    return this.result;
  }

  calculate(string) {
    function getPriority(operand) {
      if (operand == "^") {
        return 1;
      } else if (operand == "*" || operand == "/") {
        return 2;
      } else if (operand == "+" || operand == "-") {
        return 3;
      } else if (operand == "(" || operand == ")") {
        return 4;
      } else {
        return -1;
      }
    }
    let open_parantheses = 0;
    let close_parantheses = 0;
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] != "(" &&
        string[i] != ")" &&
        string[i] != "*" &&
        string[i] != "" &&
        string[i] != " " &&
        string[i] != "+" &&
        string[i] != "-" &&
        string[i] != "/" &&
        string[i] != "." &&
        isNaN(string[i])
      ) {
        console.log("Invalid Input");
        return;
      }
    }
    for (let i = 0; i < string.length; i++) {
      if (string[i] == "(") {
        open_parantheses += 1;
      } else if (string[i] == ")") {
        close_parantheses += 1;
      }
    }
    if (open_parantheses != close_parantheses) {
      console.log("Invalid input");
      return;
    }
    // for (let i = 0; i < string.length; i++) {
    //   let check = getPriority(string[i]);
    //   if (check == -1) {
    //     console.log("Invalid input");
    //     return;
    //   }
    // }
    // const regex = /\d+\.\d+|\d+|[+*/()-]/g;
    const regex = /-?\d+\.\d+|-?\d+|[+*/()-]/g;

    let temp = string.match(regex);
    console.log(temp);
    let postfix = [];
    let stack = [];
    for (let i = 0; i < temp.length; i++) {
      if (!isNaN(temp[i])) {
        postfix.push(temp[i]);

        console.log(postfix);
      } else if (stack.length == 0) {
        // let scannedElementPriority = getPriority(temp[i]);
        stack.push(temp[i]);
      } else if (temp[i] == "(") {
        stack.push(temp[i]);
      } else if (temp[i] == ")") {
        if (stack.length == 0) {
          console.log("Invalid Input");
          return;
        }
        console.log(stack, temp[i]);
        while (stack[stack.length - 1] != "(") {
          let element = stack.pop();
          postfix.push(element);
        }
        stack.pop();
        console.log(stack);
      } else {
        if (temp[i] == "^" && stack[stack.length - 1] == "^") {
          stack.push(temp[i]);
          continue;
        } else {
          let scannedElementPriority = getPriority(temp[i]);
          let topOfStackPriority = getPriority(stack[stack.length - 1]);
          if (scannedElementPriority < topOfStackPriority) {
            stack.push(temp[i]);
          } else {
            while (
              stack.length > 0 &&
              (getPriority(stack[stack.length - 1]) <= getPriority(temp[i]) ||
                stack[stack.length - 1] != "(")
            ) {
              let element = stack.pop();
              // console.log(stack, "chce");
              postfix.push(element);
            }
            stack.push(temp[i]);
          }
        }
      }
    }
    while (stack.length != 0) {
      let element = stack.pop();
      postfix.push(element);
    }
    console.log(postfix);
    let stack2 = [];
    // let result = 0;
    for (let i = 0; i < postfix.length; i++) {
      // console.log(stack2, postfix[i]);
      if (!isNaN(postfix[i])) {
        stack2.push(parseFloat(postfix[i]));
        // console.log(stack2);
      } else {
        if (stack2.length < 2) {
          console.log("Invalid input");
          return;
        }
        let peek = parseFloat(stack2.pop());
        let second_peek = parseFloat(stack2.pop());

        if (postfix[i] == "+") {
          if (stack2.length == 0) {
            // result += peek + second_peek;
            stack2.push(second_peek + peek);
          } else {
            // result = stack2.pop();
            let result = second_peek + peek;
            // console.log(result);
            stack2.push(result);
          }
        } else if (postfix[i] == "-") {
          // stack2.push(second_peek-peek);
          if (stack2.length == 0) {
            stack2.push(second_peek - peek);
          } else {
            // result = stack2.pop();
            let result = second_peek - peek;
            stack2.push(result);
          }
        } else if (postfix[i] == "*") {
          // stack2.push
          if (stack2.length == 0) {
            stack2.push(second_peek * peek);
          } else {
            // result = stack2.pop();
            let result = second_peek * peek;
            stack2.push(result);
          }
        } else if (postfix[i] == "/") {
          if (second_peek / peek == Infinity) {
            console.log("Error");
            return;
          }
          // stack2.push
          if (stack2.length == 0) {
            stack2.push(second_peek / peek);
          } else {
            // result = stack2.pop();
            let result = second_peek / peek;
            stack2.push(result);
          }
        } else if (postfix[i] == "^") {
          // stack2.push
          if (stack2.length == 0) {
            stack2.push(second_peek ** peek);
          } else {
            // result = stack2.pop();
            let result = second_peek ** peek;
            stack2.push(result);
          }
        }
      }
    }
    console.log(stack2[stack2.length - 1]);
    // console.log(4 / 2);
  }
}

let a1 = new Calculator(0);
// console.log(a1.getResult());
// let result = a1.add(3);
// let result2 = a1.add(14);
// // a1.clear();
// console.log(a1.getResult());
// console.log(result2);
// let a2 = new Calculator(1);
// console.log(a2.getResult());

a1.add(10);
// a1.getResult();
a1.divide(3);
console.log(a1.getResult());
a1.calculate(")10 + 2(");
module.exports = Calculator;
