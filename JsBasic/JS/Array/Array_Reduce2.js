// học lại bài Array Reduce

var courses = [
    {
        id: 01,
        name: 'JS',
        coin: 250
    },
    {
        id: 02,
        name: 'Ruby',
        coin: 250
    },
    {
        id: 03,
        name: 'Java',
        coin: 250
    },
    {
        id: 04,
        name: 'JS',
        coin: 250
    },
    {
        id: 05,
        name: 'SQL',
        coin: 250 
    }
];

// Biến lưu trữ
// Thực hiện lưu trữ

// accumulator  : giá trị tích lũy, là tham số thứ 2 trong toalCoin (ở đấy = 0)
// currentValue : giá trị của phần tử mảng đang được gọi
// currentIndex : chỉ mục index của ptu đang được gọi
// originArray  : Array gốc

var i = 0;


function coninHandler(accumulator, currentValue, currentIndex, originArray){
    
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'Lượt chạy: '    : i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ' : currentValue.coin,
        'Tích trữ được: ': total
    });

    return total;
}

var totalCoin = courses.reduce(coninHandler, 0);

console.log(totalCoin);


// Cách viết ngắn gọn hơn
function coinHandler2(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}

var totalCoin2 = courses.reduce(coinHandler2, 0);

console.log(totalCoin2);


// Cách ngắn gọn hơn nữa
var totalCoin3 = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0); // 0 là Initial value

console.log(totalCoin3);

// Cách viết ES6
var totalCoin4 = courses.reduce((a,b) =>
    a+b.coin, 0 
 );

console.log(totalCoin3);
