/**
    Hàm (function) trong JS

    1. Hàm
        - Là một khối mã
        - Làm 1 công việc cụ thể

    2. Loại hàm
        - Built-in
        - Tự định nghĩa
    
    3. Tính chất
        - Không thực thi khi định nghĩa
        - Sẽ thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về 1 giá trị
    
    4. Tạo hàm đầu tiên
 */     
    function showDialog() {
        // alert('Hi, xin chao cac ban !')  
    }

    showDialog();

/**
    Bài 26: Tham số trong hàm

        1. Tham số?
            - ĐỊnh nghĩa
            - Kiểu dữ liệu
            - Tính private?
            - 1 Tham số
            - Nhiều tham số
        
        2. Truyền tham số
            - 1 Tham số
            - NHiều tham số
        
        3. Arguments?
            - ĐÔi tượng arguments
            - Giới thiệu vòng for
 */

    function writeLog(message) {
        console.log(message);
    }
    writeLog(['Hiep', 'ngoc ngo']);

    function writeLog2() {
        console.log(arguments);
    }
    writeLog2(['Hiep', 'ngoc ngo']);

    function writeLog3() {
        var myString = '';
        for (var param of arguments) {
            myString += `- ${param}`
        }
        console.log(myString);
    }
    writeLog3('Log 1', 'Log 2', 'Log 3', 25, NaN); 
      


/**
    Bài 27: Return trong hàm
*/

    // return trong hàm - JS cơ bản

    // var isConfirm = confirm('bạn ăn cơm chưa?');
    // console.log(isConfirm);

    function cong(a, b){
        return  a.toString() + b.toString();
    }

    var result = cong(4, 9);
    
    console.log(result);