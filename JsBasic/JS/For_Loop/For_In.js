//  video 42: Vòng lặp For/in

// Thường sử dụng để lấy key của đối tượng

var myInfo = {
    name: 'Hiep Nguyen',
    age: 17,
    address: 'Ha Noi, Viet Nam'
};

for (var key in myInfo){
    // code
    console.log(key);
};

console.log('--');

for (var key in myInfo){
    // code
    console.log(myInfo[key]);
};

console.log('--');

var myString = 'HiepNguyenThanh';

console.log(myString[0]);

console.log('--');

for (var key in myString){
    console.log(myString[key]);
}