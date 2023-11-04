// Bai 51: Array reudce() method


var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 3,
        name: 'Java',
        coin: 250
    },
    {
        id: 4,
        name: 'JS',
        coin: 250
    },
    {
        id: 5,
        name: 'SQL',
        coin: 250 
    }
];

// 1. Dễ hiểu: dùng vòng lặp sẽ dễ hiểu hơn
// 2. Ngắn ngọn: các method sẽ ngắn ngọn
// 3. Hiệu năng: viết Vòng lặp sẽ nhanh hơn


// Biến lưu trữ
var totalCoin = 0;

// Lặp qua các phần tử
for (var course of courses){

    // Thực hiện việc lưu trữ
    // totalCoin += course.coin;
}
// console.log(totalCoin);


// Reduce()
console.log('Reduce()')

var i = 0;

// accumulator: Biến lưu trữ (ở vdu dưới có cùng giá trị với tham số thứ 2 trong totalCoin)
// currentValue: Giá trị hiện tại
// currentIndex: chỉ mục của object đang được gọi trong mảng
// originArray: Array gốc
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });
    // console.log(currentValue);
    // console.log(currentIndex);

    return total;
}

var totalCoin = courses.reduce(coinHandler, 0);

console.log('---')

console.log(totalCoin);

