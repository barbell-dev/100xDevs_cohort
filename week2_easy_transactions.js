/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function isMember(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (element == array[i].category) {
      return true;
    }
  }
  return false;
}
function calculateTotalSpentByCategory(transactions) {
  let temp = [];
  let transaction = {};
  console.log(transactions.length);
  for (
    let transaction_index = 0;
    transaction_index < transactions.length;
    transaction_index++
  ) {
    transaction.category = transactions[transaction_index].category;
    transaction.totalPrice = 0;
    if (!isMember(transaction.category, temp)) {
      temp.push(transaction);
      transaction = {};
    } else {
      continue;
    }
  }
  // console.log(temp);
  for (
    let transaction_index = 0;
    transaction_index < transactions.length;
    transaction_index++
  ) {
    for (
      let transaction_element = 0;
      transaction_element < temp.length;
      transaction_element++
    ) {
      if (
        temp[transaction_element].category ==
        transactions[transaction_index].category
      ) {
        temp[transaction_element].totalPrice +=
          transactions[transaction_index].price;
      }
    }
  }
  return temp;
}
let result = calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]);
console.log(result);
module.exports = calculateTotalSpentByCategory;
