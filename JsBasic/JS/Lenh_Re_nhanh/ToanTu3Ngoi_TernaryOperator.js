// Video 37: Toán tử 3 ngôi; Ternary operator

var course = {
    name: 'JS',
    coin: 2
}

// if(course.coin > 0){
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Mien phi');
// }

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';

console.log(result);

var a = 1;
var b = 2;

var c = a > b ? a : b;

console.log(c);