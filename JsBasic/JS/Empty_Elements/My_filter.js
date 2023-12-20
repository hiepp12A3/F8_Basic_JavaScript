//Foreach, find, filter, some, every, reduce

/* filter: lọc ra các phần tử thỏa mãn điều kiện

    Cú pháp cơ bản của filter là:
    const newArray = array.filter(function(currentValue, index, array) {
    // Trả về true nếu currentValue thỏa mãn điều kiện
    });

    Trong đó:
    array: Mảng bạn muốn lọc.
    currentValue: Giá trị hiện tại của phần tử trong mảng.
    index (tùy chọn): Chỉ số của phần tử hiện tại.
    array (tùy chọn): Mảng đang được lọc.

*/

Array.prototype.filter2 = function (callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
           var result =  callback(this[index], index, this);
           if(result){
                output.push(this[index]);
           }
        }
    }
    return output;
}

var courses = [
    {
        name: 'JS',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    },
]

var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700;
});

console.log(filterCourses);