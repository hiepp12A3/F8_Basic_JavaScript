// Video 49: Làm việc với mảng - Phần 2

/**
    Array methods:
        forEach():  - Duyệt các phần tử trong một mảng
       
        Every():    - Trả về Boolean, 
                    - Kiểm tra tất cả các phần tử của mảng phải thỏa mãn 1 điều kiện gì đó
                    - Phần tử tìm được fail đầu tiên sẽ không tìm các phần tử tiếp theo nữa
        
        some():     - chỉ cần 1 phần tử true là trả về true
        
        find():     - Chỉ tìm và lấy 1 phần tử thỏa mãn đầu tiên
                    - Không tìm thấy trả về undefined
        
        filter():   - Lọc lấy tất cả các phần tử thỏa mãn
       
        map()
        reduce()
  
 */


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
 
// ---------- ForEach(): Duyệt các phần tử của một mảng ----------

console.log('ForEach()')

courses.forEach(function (course, index) { // call back: được gọi lại
    // trả về toàn bộ mảng và index là số thứ tự
    console.log(index, course)
}); 

console.log('--------------------------------')



// ---------- Every(): Trả về Boolean, Kiểm tra tất cả các phần tử của mảng phải thỏa mãn 1 điều kiện gì đó ----------

console.log('Every()')

var isFree = courses.every(function (course, index) { // call back: được gọi lại
    console.log(index)
    return course.coin === 0;
}); 

// fail: vì có chỉ cần có 1 phần tử khác 0  sẽ trả về false
// true: khi tất cả các phần tử có coin là 0
console.log(isFree);  // false
console.log('--------------------------------')


// ---------- Some(): giống với Every; khác ở chỗ 1 ptu true thì trả về true ----------

console.log('Some()')

var isFree2 = courses.some(function (course, index) { // call back: được gọi lại
    console.log(index)
    return course.coin === 0;
}); 

// true:
console.log(isFree2);
console.log('--------------------------------')


// ---------- Find(): Trả về ptu đang tìm, chỉ lấy 1 ptu và dừng lại ko tìm nữa ----------

console.log('Find()');

var course = courses.find(function (course, index) { // call back: được gọi lại
    return course.name === 'JS';
}); 

//{id: 1, name: 'JS', coin: 250}
console.log(course);
console.log('--------------------------------')


// ---------- filter(): Trả về tất cả phần tử tìm được ----------
console.log('Filter()');


var course2 = courses.filter(function (course, index) { // call back: được gọi lại
    return course.name === 'JS';
}); 
// trả về 2 phần tử
console.log(course2);