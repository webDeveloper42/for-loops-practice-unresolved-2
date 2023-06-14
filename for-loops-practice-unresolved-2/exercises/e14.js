
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accountWrongBalance = [];
  let sum1 = 0;
  let sum2 = 0;
  for(let account of array){
    sum1 = 0;
    sum2 = 0;
    if(Array.isArray(account.deposits)){
      for(let deposits of account.deposits){
        sum1 += deposits;
      }
    }
    if(Array.isArray(account.withdrawals)){
      for(let withdrawals of account.withdrawals){
        sum2 += withdrawals;
      }
    }
    if (account.balance !== sum1 - sum2){
      accountWrongBalance.push(account);
    }
  }
  return accountWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
