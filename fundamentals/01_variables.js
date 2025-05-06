const accountId = 1123;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
 //can declare variable like this too yet its not preferable.
let accountState;
/*
prefer not to use var because of issue in block scopre and functional scope
*/
// accountId = 2

accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountPassword,accountState]);
