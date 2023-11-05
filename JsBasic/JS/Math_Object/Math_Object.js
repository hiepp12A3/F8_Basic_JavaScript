// Bài 54: Math Object

/**
    - Math.PI       : trả về số PI
    - Math.round()  : làm tròn số
    - Math.abs()    : trả về giá trị tuyệt đối
    - Math.ceil()   : chỉ làm tròn trên
    - Math.floor()  : làm tròn dưới
    - Math.random() : sinh ra số ngẫu nhiên nhỏ hơn 1
    - Math.min()    : lấy giá trị lớn nhất
    - Math.max()    : lấy giá trị nhỏ nhất
 */


// Math.PI : Trả về số PI
console.log('Math.PI')
// 3.141592653589793
console.log(Math.PI);



// Math.round(): Làm tròn số (đưa vào số thập phân, trả về số nguyên)
console.log('Math.round()')
// 1
console.log(Math.round(1.3));
// 2
console.log(Math.round(1.5));
// 1
console.log(Math.round(1.49));



// Math.abs(): số tuyệt đối (giá trị tuyệt đôi) (biến số âm -> dương)
console.log('Math.abs()');
// 5
console.log(Math.abs(-5));
// 5
console.log(Math.abs(5));



// Math.ceil(): chỉ làm tròn trên
console.log('Math.ceil()');
// 5
console.log(Math.ceil(4.1));
// 5
console.log(Math.ceil(4.0000001));
// 4
console.log(Math.ceil(4.000000));



// Math.floor(): làm tròn dưới
console.log('Math.floor()');
// 4
console.log(Math.floor(4.9999));



// Math.ramdom(): trả về số thập phân nhỏ hơn 1
console.log('Math.random()');
console.log(Math.random());
// tạo ra số ngẫu nhiên 1->10
console.log(Math.floor(Math.random() * 10));
// tạo ra số ngẫu nhiên 1->100
console.log(Math.floor(Math.random() * 100));
// ex 1: 
    var random = Math.floor(Math.random() * 5);
    var bouns = [
        '10 coin',
        '20 coin',
        '30 coin',
        '40 coin',
        '50 coin'
    ]
    // random sẽ truyền vào các số từ 0->5 sinh ra ngẫu nhiên
    console.log(bouns[random]);

//ex 2:
    var random2 = Math.floor(Math.random() * 100);
    if(random2 < 50){
        console.log('Cường hóa thành công')
    }


// Math.min(): lấy con số nhỏ nhất
console.log('Math.min()');
// -100
console.log(Math.min(-100, 1, 65, 99));



// Math.max(): lấy con số lớn nhất
console.log('Math.max()')
// 99
console.log(Math.max(-100, 1, 65, 99));