// Bài 56: Callback phần 2

/**
 * 1. là hàm
 * 2. truyền qua đối số
 * 3. được gọi lại (trong hàm nhận đối số)
 */

var courses = [
    'JS',
    'PHP',
    'SQL',
    'Rupy'
];

// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));




// định nghĩa map2 là 1 prototype
Array.prototype.map2 = function(callBack){
    // this đây là gọi là hàm courses
    console.log(this);

    // cách viết hiệu năng hơn
    var output = [];
    var arrayLength = this.length;

    for(var i = 0; i < arrayLength; i++){
        
        var result =  callBack(this[i], i);

        output.push(result);

        console.log('result: ', result);
    }

    return output;
}

var htmls2 = courses.map2(function(course){
    return `<h2>${course}</h2>`; 
});

console.log(htmls2.join(''));


/**
 * 
 Bài tập callback
 B1: forEach, reduce, find, filter
 tạo ra các phương thức tương tự các phương thức trên

 */
