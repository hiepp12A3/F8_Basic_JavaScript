
// Video 3: Đối tượng Date

// CÁCH 1:
var date1 = new Date();

//object
console.log(typeof date1);

//Mon Oct 16 2023 00:24:15 GMT+0700 (Indochina Time)
console.log(date1);

console.log('----');

//
var  year = date1.getFullYear();
var  month = date1.getMonth() +1;
var day = date1.getDate();

console.log(year);
console.log(month);
console.log(day);

//16/10/2023
console.log(`${day}/${month}/${year}`);

console.log('----');

// CÁCH 2:
var date2 = Date();

// string
console.log(typeof date2);

//Mon Oct 16 2023 00:26:20 GMT+0700 (Indochina Time)
console.log(date2);

