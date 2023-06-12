
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

// initiate a variable with an empty array
// check if each array have a deposits
// iterate over each deposit of the deposits 
// 	if each deposit of the deposits are less than 2000
// 		return the sum of the deposits
// 			push the to the results
// return the result
//not done!!!!!
export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let result = [];
  for (let i = 0; i<array.length; i++){
    let bankAccount = array[i];
    let deposits = array.deposits;
    let sum = 0;
    for(let x = 0; x < deposits.length; x++){
      sum += deposits[x];
    }
    if (sum < 2000){
      result.push(bankAccount);
    }
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
