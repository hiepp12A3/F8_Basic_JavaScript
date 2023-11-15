// forEach, find, filler, some, every, reduce

var courses = [
    'JS',
    'PHP'
];

// cách 1: gán độ dài cho mảng
courses.length = 10;


// cách 2: gán độ dài cho mảng
var courses2 = new Array(10);
//thêm p.tử vào mảng
courses2.push('SQL', 'HTML')
console.log(courses2);




// dùng for dưới sẽ duyệt qua hết các phần tử, cả những phần tử rỗng
for(var i=0; i < courses.length; i++){
    console.log(courses[i]);
}


for (var index in courses){
    console.log(courses[index]);
}