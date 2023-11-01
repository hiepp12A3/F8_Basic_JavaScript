/**
 * BÀI 20: LÀM VIỆC VỚI CHUỖI

 * Keyword: JavaScript string methods
 
    1. Length               : Kiểm tra độ dài của chuỗi (length)
    2. Find index           : Tìm vị trí của đối tượng bằng (indexOf, lastIndexOf, search ), nếu không tìm thấy trả về -1
    3. Cut String           : cắt chuôi (slice)
    4. Replace              : sửa phần tử mà mình muốn (replace)
    5. Convert to upper case: chuyển hết về chữ Hoa (toUpperCase)
    6. Convert to lower case: chuyển hết về chữ Thường (toLowerCase)
    7. Trim                 : Loại bỏ khoảng trắng thừa ở đầu và cuối
    8. Split                : Dựa vào 1 điểm chung cắt thành 1 array
    9. Get a character by index: lấy được 1 ký tự bởi index cho trước (sử dụng charAt; hoặc [])
 */

//Demo
var myString = '   Hoc JS tai JS JS F8! JS    ';

// 1. Length
console.log(myString.length); // 



// 2. Find index
// indexOf: trả về vị trí đầu tiên của đối tượng trong chuối lớn, từ vị trí sau nó không trả về
console.log(myString.indexOf('JS')); // 4

// Tìm theo tham số thứ 2, sau dấu phẩy là vị trí bắt đầu tìm kiếm
    console.log(myString.indexOf('JS', 6)); // 11

// tìm vị trí của đối tượng cuối cùng
    console.log(myString.lastIndexOf('JS')); // 21

// sesrch: tìm vị trí của đối tượng giống với indexOf
// Khác index:  1. không hỗ trợ phương thức thứ 2 để tìm theo vị trí bắt đầu đc chỉ định
//              2. search: hỗ trợ tìm theo biểu thức chính quy
    console.log(myString.search('JS')); // 4
    console.log(myString.search('JS', 6)); // vẫn ra 4



// 3. Cut String : (slice :lát cắt)
    console.log(myString.slice(3,5));  // trả về: J

// muốn cắt hết từ vịt trí chỉ định thì bỏ tham số thứ 2 đi
    console.log(myString.slice(3));  // trả về: JS tai JS JS F8! JS

// muốn cắt nguyên chuỗi nhập vào: 0
    console.log(myString.slice(0));  // trả về: Hoc JS tai JS JS F8! JS';

//LƯU Ý: muốn cắt từ phải sang trái đếm từ 0, -1, -2...
// ex: muốn cắt chữ F8
    console.log(myString.slice(-6, -4));  // trả về: F8



// 4. Replace
// replace: sẽ ghi đè phần tử đầu tiên tìm thấy
    console.log(myString.replace('JS', 'JavaScript')); // trả về: Hoc JavaScript tai JS JS F8! JS

// sử dụng biểu thức chính quy khi muốn ghi đè các phần tử giống nhau
    console.log(myString.replace(/JS/g, 'JavaScript')); // trả về: Hoc JavaScript tai JavaScript JavaScript F8! JavaScript



// 5. Convert to upper case: (toUpperCase) chuyển hết về chữ Hoa
    console.log(myString.toUpperCase()); // trả về: HOC JS TAI JS JS F8! JS



// 6. Convert to lower case: (toLowerCase) chuyển hết về chữ Thường
    console.log(myString.toLowerCase()); // trả về: hoc js tai js js f8! js

// 7. Trim
    console.log(myString.trim()); // trả về:Hoc JS tai JS JS F8! JS
    console.log(myString.trim().length); // trả về: 23
    console.log(myString.length); // trả về: 30

// 8. Split
    var members1 = 'Hiep, Tung, Minh, Long';
    // dựa vào điểm chung là phẩu và cách ,  để cắt thành 1 chuỗi
    console.log(members1.split(', ')); // trả về: (4) ['Hiep', 'Tung', 'Minh', 'Long']

    var members2 = 'HiepUbQn';
    console.log(members2.split('')); // trả về: (8) ['H', 'i', 'e', 'p', 'U', 'b', 'Q', 'n']

// 9. Get a character by index: lấy được 1 ký tự bởi index cho trước
    var myString2 = 'Thanh Hiep';

    console.log(myString2.charAt(0)); // trả về: T
    console.log(myString2.charAt(6)); // trả về: H

    // nhập ký ký tự chuỗi trả về 1 chuỗi rỗng kiểm tra bằng typeof
    console.log(typeof myString2.charAt(10)); // trả về: string

    var myString3 = '';
    console.log(typeof myString2.charAt(0)); // trả về: string


    // cách 2: sử dụng dấu ngoặc vuông
    console.log(myString2[0]);  // trả về: T
    console.log(myString2[6]);  // trả về: H

    // nếu chuyền vào chuỗi rỗng sẽ trả về undefined
    console.log(myString2[10]); // undefined+
    

/**
 * BÀI 29: SỐ VÀ LÀM VIỆC VỚI SỐ

 * Keyword: Kiểu số (Number) trong JavaScript
 
    1. Tạo giá trị Number
        - Các cách tạo
        - Dùng cách nào? Tại sao?
        - Kiểm tra data type
        - NaN là số không hợp lệ, Hàm kiểm tra số không hợp lệ khi nhập

    
    2. Làm việc với Number
        - To string : đưa number về string
        - To Fixed : làm tròn số thập phân
 */
    ///** 1 */

    // cách tạo
    // C1: 
    var PI = 3.14;
    // C2: Nên dùng cách 2
    var cachTaoNumber = new Number(19);

    var result = 20 / 'ABC';

    console.log(typeof a); // number
    console.log(typeof cachTaoNumber); // object

    console.log(result); // NaN
    console.log(typeof result); // number (đây là 1 số không hợp lệ)

    // Hàm kiểm tra NaN
    console.log(isNaN(result)); // true vì đây là NaN số không hợp lệ
    console.log(isNaN(PI)); // false vì đây là số không hợp lệ


     ///** 2 */
     var age = 18;
     var TP = 1.99999;
     var TP2 = 1.555;
     var TP3 = 1.555;

    //  cách 1:
     var myString2 = age.toString();
     console.log(myString2);
     // cách 2
     console.log(TP.toString());

    // -- Fixed
    console.log(TP.toFixed()); // làm tròn thành 2 (sau số phẩy từ 5 trở lên làm tròn lên)
    console.log(TP2.toFixed()); // làm tròn thành 2
    console.log(TP2.toFixed()); // làm tròn thành 1 (sau số phẩy từ 4 trở xuống làm tròn xuống)




/**
 * BÀI 23: Mảng

 * Keyword: Mảng trong JS - Array

    1. Tạo mảng
        - Cách tạo
        - Sử dụng cách nào? Tại sao?
        - Kiểm tra data typev sử dụng (Array.isArray(tham so truyen vào))
    
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
 */

    // cách tạo 1
    var mangLanguages = [
        'js',
        'java',
        'php',
        {},
        NaN
    ];
    console.log(mangLanguages);

    // cách tạo 2 (không nên sử dụng cách này)
    var mangLanguages2 = new Array(
        'js',
        'java',
        'php',
        {},
        NaN
    );
    console.log(typeof mangLanguages2);

    // cash kiểm tra Array và Object
    console.log(Array.isArray(mangLanguages));  // true (nếu là true là Array và ngược lại là object )
    console.log(Array.isArray({}));  // false (truyền object là false)


/**
 * BÀI 24: Làm việc với mảng

 * Keyword: Javascript array methods

    1. Tostring (chuyển các kiểu dl sang String)
    2. Join
   
    3. Pop      (xóa phần tử cuối mảng, trả về ptu đã xóa , nếu xóa hết các phần tử mảng trả veeff undefined)
    5. Shift    (xóa đi phần tử ở đầu mảng, trả về phần tử đã xóa)
    
    4. Push     (thêm phần tử vào cuối mảng, thêm 1 or nhiều ptu. Trả về độ dài mới của mảng)
    6. Unshift  (thêm phần tử vào đầu mảng, thêm 1 or nhiều ptu. Trả về độ dài mới của mảng)
    
    7. Splcing  (xóa, cắt, chèn ptu) 
    9. Slicing  ()
   
    8. Concat   (nối 2 mảng)

 */

    var lamviecvoichuoi = [
        'js',
        'php',
        'java'
    ];

    var chuyenSo = 9;

    console.log(lamviecvoichuoi); // (3) ['js', 'php', 'java']

    // 1. toString
    console.log(lamviecvoichuoi.toString()); // js,php,java

    console.log(chuyenSo); // 9
    console.log(chuyenSo.toString()); // '9'


    // 2. Join
    var testJoin = ['hiep', 'tung', 'minh', 'long', 'hieu'];
    console.log(testJoin.join());           // hiep,tung,minh,long,hieu
    console.log(testJoin.join(', '));      // hiep, tung, minh, long, hieu
    console.log(testJoin.join(' + '));    // hiep + tung + minh + long + hieu
    console.log(testJoin.join(''));      // hieptungminhlonghieu
    console.log(testJoin);              // (5) ['hiep', 'tung', 'minh', 'long', 'hieu']


    // 3. Pop: xóa phần tử cuối cùng khỏi mảng
        var testPop = ['hiep', 'tung', 'minh', 'long', 'hieu'];

        console.log(testPop.pop()); // hieu
        console.log(testPop); // (4) ['hiep', 'tung', 'minh', 'long']

    // 4. shift() : xóa phần tử đầu mảng,ngược lại với Pop
        var testShift = ['hiep', 'tung', 'minh', 'long', 'hieu'];

        console.log(testShift.shift()); // hiep
        console.log(testShift); // (4) ['tung', 'minh', 'long', 'hieu']

    // 5. Push: thêm 1 or nhiều ptu vào cuối mảng
        var testPush = ['hiep', 'tung', 'minh', 'long'];
        console.log(testPush.push('HIep dep trai sieu cap')); // 
        console.log(testPush); // (5) ['hiep', 'tung', 'minh', 'long', 'HIep dep trai sieu cap']

    // 6. Unshift : xóa phần tử đầu mảng
        var testUnshift = ['hiep', 'tung', 'minh', 'long'];
        console.log(testUnshift.shift()); // hiep
        console.log(testUnshift); // (3) ['tung', 'minh', 'long']
    
    // 7. Splcing() : thêm hoặc xóa ptu mảng
        var testSplcing = ['hiep1', 'tung1', 'minh1', 'long1'];

        // console.log(testSplcing.splice(0, 1)); //  ['hiep1']
        // console.log(testSplcing.splice(1, 2)); // (2) ['minh1', 'long1']
        console.log(testSplcing.splice(1, 2, 'ngocNgo')); // 
        console.log(testSplcing)

    // 8. Slicing() : lấy 1 số ptu trong mảng (array.slice(start, end) )

        var testSlice = ['Slice1', 'Slice2', 'Slice3', 'Slice4'];

        console.log(testSlice.slice(1)); // (3) ['Slice2', 'Slice3', 'Slice4']
        console.log(testSlice.slice(2)); // (2) ['Slice3', 'Slice4']

        let fruits = ['Chuối', 'Cam', 'Chanh', 'Táo', 'Xoài'];
        
        // Lấy hai phần tử Cam và Chanh trong mảng fruits
        // Ta phải nhập 1,3 vì phần tử cuối cùng không được tính.
        let citrus = fruits.slice(1, 3);
        ​
        // fruits chứa ['Chuối', 'Cam', 'Chanh', 'Táo', 'Xoài'];
        // citrus chứa ['Cam','Chanh'];

        console.log(testSlice); 

    
    // 9. Concat() dùng để nối 2 hay nhiều mảng với nhau
        var array1 = ['a', 'b', 'c'];
        var array2 = ['d', 'e', 'f'];
        var array3 = array1.concat(array2);
        
        console.log(array3); // > Array ["a", "b", "c", "d", "e", "f"]
        console.log(array1); // > Array ["a", "b", "c"]
        console.log(array2); // > Array ["d", "e", "f"]

