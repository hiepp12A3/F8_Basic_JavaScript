
//  some: kiểm tra xem có ít nhất 1 phần tử thỏa mãn điều kiện cụ thể hay không
//  some: true / false


Array.prototype.some2 = function (callback){
    for( var index in this){
        if(this.hasOwnProperty(index)){
            if (callback(this[index], index, array)){
                return true;
            }
        }
    }
    return false;
}


var courses = [
    {
        name: 'JS',
        coin: 680,
        isFinish: false
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    },
]

var courses = new Array(100);

var result = courses.some2(function (course, index, array) {
    return course.isFinish === true
});

console.log(result)