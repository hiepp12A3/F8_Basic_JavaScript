// video 43: Vòng lặp For/of


// sử dụng lấy phần tử của 1 mảng, hoặc từng chữ cái của 1 chuỗi

// không sử dụng được với Object


var languages = [
    'JS',
    'PHP',
    'Java'
]
// dùng cho 1 mảng
for (var value of languages){
    console.log(value);
};

console.log('---');




// dùng cho 1 chuỗi
var languages2 = 'JavaScript';

// ex1:
for (var value of languages2){
    console.log(value);
}

console.log('---');

// ex2:
var languages3 = {
    name1: 'JS',
    name2: 'PHP',
    name3: 'Java'
}

// erro
// for (var value of languages3){
//     console.log(value); 
// }

console.log('---');

// pass
console.log(Object.keys(languages3));

for (var value of Object.keys(languages3)){
    console.log(value);
}


