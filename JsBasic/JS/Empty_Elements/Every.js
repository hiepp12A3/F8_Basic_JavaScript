
// every: true/false
//  giống some, khác ỏ chỗ some kiểm tra 1 điều kiện đúng thì true. Every thì cần tất cả điều kiện đúng mới trả về true


Array.prototype.every2 = function (callback){
    var output = true;
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'JS',
        coin: 680,
        isFinish: true
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
];

var result = courses.every2(function (course, index, array) {
    return course.coin > 500;
});

console.log(result);