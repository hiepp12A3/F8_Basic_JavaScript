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

