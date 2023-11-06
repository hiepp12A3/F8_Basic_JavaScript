// Bài 55: Callback?

/**
    - Là hàm (function) được truyền qua đối số
    - Khi gọi hàm khác

    1. Là hàm
    2. Được truyền qua đối số
 */

function myFunction(param) {
    // console.log(typeof param);
    // Kiểm tra xem param có phải là 1 function không
    if(typeof param === 'function'){
        param('Học lập trình');
    } else {
        console.log('Đây ko phải là 1 function')
    }
}

function myCallback(value){
    console.log('Value: ', value);
}   

myFunction(myCallback);