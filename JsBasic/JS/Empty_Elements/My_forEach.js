// Bài 58: forEach, find, filler, some, every, reduce

/* Cú pháp cơ bản của forEach
array.forEach(function(currentValue, index, array)){
    // action
}

Trong đó:
`array` : Mảng muốn lặp
`currentValue`: giá trị hiện tại của phần tử trong mảng
`index` (tùy chọn): chỉ số của phần tử hiện tại
`array` (tùy chọn): mảng đang được lặp

*/

// Object prototype

Array.prototype.forEach2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

console.log(Array.prototype)

var course = new Array(100);
course.push('Hiep','binh')

// console.log(course)

var output = course.forEach2(function(course, index, array) {
    console.log(course, index, array);
});
