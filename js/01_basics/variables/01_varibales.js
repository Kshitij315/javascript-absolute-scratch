const accountId = 223345;

let accountEmail = "kshitij123@gmail.com";

var accountPassword = "1234567890";
accountCity = "japan";

accountEmail = "lol@gmail.com";
accountPassword = "001100101";

accountCity = "germany";
let accountState;

console.log(accountId);

/*  
Prefer not to use var because of issues with block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
