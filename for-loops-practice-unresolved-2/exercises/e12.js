
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let result = [];
  for (let i = 0; i<array.length; i++){
    let deposits = array[i].deposits;
    if(deposits && deposits.length){
      for (let x = 0; x<deposits.length; x++){
        if(deposits[x] > 100){
          result.push(deposits[x]);
        }
    }
    }
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
