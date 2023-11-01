
/*
     *** KHAI BÁO BIẾN ***
*/ 
// var fullName = 'Nguyen Thanh Hiep';
// var age = 24;

// alert(fullName);
// alert(age);

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/*
 ***  Một số hàm built-in ***
 
Giới thiệu một số hàm built-in.
    1. Alert (hiển thị hộp thoại)
    2. Console
    3. Confirm (hiển thị hộp thoại + để xác nhận)
    4. Prompt (hiển thị hộp thoại + để nhập thêm ký tự)
    5. Set timeout (đoạn code được chạy trong khoảng time, chạy 1 lần thôi)
    6. Set interval (đoạn code được lặp lại liên tục cách khoảng thời gian đó)
 */

    // alert('Hiep oi co len');

    // console.log('Ngu it thoi');
    // console.warn('ngu muon hai nguoi');
    // console.error('buon ngu qua');

    // confirm('Ban co buon ngu khong!');

    // prompt('Ban bao nhieu tuoi!');

    // setTimeout(function() {
    //     alert('Hiep ub');
    // }, 1000);

    // setInterval(function() {
    //     console.log('day ne' + Math.random());
    // }, 1000);


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/*** LÀM QUEN VỚI TOÁN TỬ ***

Giới thiệu về toán tử trong JavaScript
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical
 */

    // //1.
    // var a  = 1+2;
    // console.log(a);

    // //2.
    // var fullName = 'Nguyen Thanh Hiep';

    // //3.
    // var b = 1;
    // var c = 2;

    // if(b == c){
    //     alert('dung');
    // }

    // //4.
    // var d = 1;
    // var e = 2;

    // if(d > 0  && e > 0){
    //     alert('dung rui');
    // }


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/**
 *  *** Toán tử số học ***
        +   --> Cộng
        -   --> Trừ
        *   --> Nhân
        **  --> Lũy thừa
        /   --> Chia
        %   --> Chia lấy số dư
        ++  --> Tăng 1 giá trị số
        --  --> Giảm 1 giá trị số
*/

// var a = 2 % 3;

// if(a > 0){
//     console.log('a la so am');
// }else{
//     console.log('a la so duong');
// }

// var b = 5;

// b--;

// console.log(b)

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/**
    *** Toán tủ ++ -- tiền tố & hậu tố

    Toán tử ++ --
    Prefix & Postfix
 */

    // var a = 6;
    // // Việc 1: + 1 cho a, a = a+1 => a = 7
    // // Việc 2: trả về a sau khi được +1
    // console.log(++a); // -- thì ngược lại


    // var b = 6;
    // var output1 = b++;
    // // Việc 1: `a copy`, `a copy` = 6
    // // Việc 2: + 1 của a, a = a + 1 => a = 7
    // // Việc 3: trả về `a copy`
    // console.log('output = ' + output1);

    // console.log('b = ' + b);

    // // Bài tập 1 :
    // var number1 = 6;
    // var output2 = number1++ + --number1;
    // // 6+6=12
    // console.log('output2 = '+ output2);


    //  // Bài tập 2 :
    //  var number2 = 6;
    //  var output3 = number2++ * 2 - --number2 * 2;
    //  // 6*2 - 6*2 =0
    //  console.log('output3 = '+ output3);


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/**
  *** Toán tử chuỗi ***
 */


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


/**
  *** Toán tử logical ***

  1. && - And (cả 2 vế đều đúng => điều kiện true)
  2. || - Or (1 trong 2 vé trái phải đúng => điều kiện đúng)
  3. !  - Not (phủ định điều kiện, đúng thành sai, sai thành đúng)
 */


  /**
   *** Kiểu dữ liệu trong Javascript ***
   
   1. Dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol

    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object
   */
   
    // // Number type
    // var a = 1;
    // var b = 2;
    // var c = 1.5;

    // console.log(typeof c);

    // // String type
    // // cách thêm dấu nháy đơn ' vào 1 chuỗi => thêm dấu này vào \
    // //  nháy đơn
    // var fullName = 'Thanh \'Hiep';
    // console.log(fullName); // Thanh 'Hiep
    // // nháy kép
    // var firstName = 'Thanh \"Hiep';
    // console.log(firstName); // Thanh "Hiep

    // console.log(typeof fullName);




    // // Boolen type
    // // đặt tên biến cần có chữ 'is' ở đằng trước
    // var isSuccess = true;

    // console.log(typeof isSuccess);


    // // Undefined type
    // // tạo ra 1 biến ko gán giá trị cho nó thì là indefined
    // var age;
    // var name;
    // console.log(age);

    // console.log(typeof age);


    // //Null
    // // là không có gì
    // var isNull = null; // nothing

    // // kiểu đặc biệt trong js null thì ra object
    // console.log(typeof isNull); // object



    // // Symbol
    // var id = Symbol('id'); // unique
    // var id2 = Symbol('id'); // unique

    // // test Symbol
    // console.log(id === id2);

    // // kiểu đặc biệt trong js null thì ra object
    // console.log(typeof id2); // object


    // // 2. Dữ liệu phức tạp - Complex Data
    // // Function

    // // đây là funciton tự định nghĩa
    // var myFunction = function(){
    //     // alert('Hi, Minh la Hiep day');
    // }
    // // cách gọi funciton
    // myFunction();


    // // Object types (có 2 thằng: 1 là Object, 1 là Array)

    // // 1. Object
    // var myObject = {
    //     name: 'Thanh Hiep',
    //     age: 18,
    //     adress: 'Ha Noi',
    //     myFunction: function () {

    //     }
    // };
    // console.log('myObject', myObject);

    // // Aray
    // var myArray = [
    //     'JS',
    //     'Java',
    //     'Ruby'
    // ];
    // console.log(myArray);


    // // cách kiểm tra kiểu của dữ liệu trong js
    // // sử dụng typeof đưa biến muốn kiểm tra và
    // console.log(typeof myArray); 


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

    // /**
    //  * TOÁN TỬ SO SÁNH - P2 
    //   === 
    //   !==
    //  */

    //   var a = 1;
    //   var b = '1';

    // // == chỉ quan tâm vaule của 2 biến 
    //   console.log(a == b);

    // // ===  so sánh của value và cả kiểu dữ liệu
    // // === so sánh tuyệt đối hơn => cho kết quả chính xác hơn
    // console.log(a === b); // true

    // console.log(a != b); // false
    // console.log(a !== b); // true



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

    /**
     * TOÁN TỬ LOGICAL VÀ CÂU LỆNH ĐIỀU KIỆN IF
     * 
     * Hiểu hơn về câu lệnh điều kiện
     * và phép so sánh
     * 
      so sánh && và || 
      && cả 2 vế trái phải đều đúng thì mới ra true
      || một trong 2 vế là true thì điều kiện là true
    
    
        Có 6 giá trị khi cover sang Boolean sẽ hiểu là false
            0
            ''
            null
            Undefined
            NaN
            false
    */

    // var a = 1;
    // var b = 2;

    // var result = 'A' && 'B' && 'C';

    // console.log(result);

    // if (result) {
    //     console.log('Dieu kien dung');
    // }else{
    //     console.log('Dieu kien sai');
    // }


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/**
 * CHUỖI TRONG JAVASCRIPT
 * 
 * 1. Tạo chuỗi
 *  - các cách tạo chuỗi
   - Nên dùng cách nào? lý do?
   - Kiểm tra data type
  2. Một số case sử dụng backslash (\)
    \\ để hiển thị \
  3. Xem độ dài chuỗi
  hàm .length
  4. Chú ý độ dài khi viết code
  5. Template string ES6
   dùng ${} 
 */

//   - các cách tạo chuỗi
//   - Nên dùng cách nào? lý do?
//   - Kiểm tra data type
  // cách 1: nên dùng cách 1
//   var fullName = 'Thanh Hiep';

//   // cách 2:dài dòng hơn, 
//   // New tên đối tượng, khi khởi tạo đối tượng tạo nên 1 install
//   // tạo ra kiểu dữ liệu Object
//   var  lastName = new String('Hiep MTP');

//   /**
//    * 2. một số lưu ý khi sử dụng backlash (\)
//    *  */ 

//   // - cách viết dấu nháy đơn '' hoặc nháy kép ""
//   var fullName2 = 'Thanh \'Hiep\''; // Thanh \ 'Hiep'
//   console.log(fullName2);;

//     // - cách viết dấu \\
//     // sử dụng 2 lần dấu \\ sẽ in ra \
//   var fullName2 = 'Thanh \\Hiep\\'; // Thanh \Hiep\
//   console.log(fullName2);;


//  /**
//    * 3. xem độ dài chuỗi
//    * dùng hàm length, đếm cả dấu cách
//   */ 
//  var fullName3 = 'Thanh Hiep   ';
//  console.log(fullName3.length);


//  /**
//    * 4. độ dài khi viết code
//    * Thường 1 dòng có 80 ký tự thôi
//   */ 
//     var nameDai = 'đây là một đoạn chuỗi rất dài'
//    + ' 1. cần xuống dòng'
//    + ' 2. nhìn gọn hơn'
//    + ' 3. đúng không nhỉ';
//     console.log(nameDai);


//  /**
//    * 5. Template string ES6
//   */ 

//  var ten = 'Hiep';
//  var ho = 'thanh';

//  console.log(`Ten toi la: ${ho} ${ten}`);

    