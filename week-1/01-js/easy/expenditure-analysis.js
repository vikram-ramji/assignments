/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  let categoryArray = [];
  for (let i = 0; i < transactions.length; i++) {
    if (categories.includes(transactions[i]["category"]) == false) {
      categories.push(transactions[i]["category"]);
      categoryArray.push({
        "category": transactions[i]["category"],
        "totalSpent": transactions[i]["price"]
      })
    } else {
      for (let j = 0; j < categoryArray.length; j++) {
        if (categoryArray[j]["category"] == transactions[i]["category"]) {
          categoryArray[j]["totalSpent"] += transactions[i]["price"];
        }
      }
    }
  }
  return categoryArray;
}

module.exports = calculateTotalSpentByCategory;
