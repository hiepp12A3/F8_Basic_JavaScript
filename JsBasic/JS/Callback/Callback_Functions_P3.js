// Ôn lại bài 56

// Callback phần 2

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)


// Tạo Object contructer array
Array.prototype.map2 = function (callback){

    // Khai báo mảng rỗng
    var output = [];

    // lấy độ dài của mảng
    var arrayLength = this.length;

    // lặp qua từng phần tử trong mảng gốc
    for(var i=0; i < arrayLength; ++i){
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'JS',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(''));

// var htmls =  courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

/**
 * 
 Bài tập callback
 B1: forEach, reduce, find, filter
 tạo ra các phương thức tương tự các phương thức trên

 */
