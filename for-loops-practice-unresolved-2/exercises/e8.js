
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let maxBalance = 0;
  let accountWithGreaterBalance = null;
  for (const account of array) {
    if (account.balance > maxBalance){
      maxBalance = account.balance;
      accountWithGreaterBalance = account;
    }
  }
  return [accountWithGreaterBalance];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
