/**
    Bài 28: Hiểu hơn về function

    Một số điều cần biết về function
        1. Khi function đặt trùng tên?
        2. Khai báo biến trong hàm?
        3. Định nghĩ hàm trong hàm?
 */

    // 1. Khi function đặt trùng tên? (hàm dưới cùng sẽ ghi đè các hàm trên)

        function showMessage() {
            console.log("Message 1");
        }

        function showMessage() {
            console.log("Message 2");
        }
   
        function showMessage() {
            console.log("Message 3 ");
        }

        showMessage();
    
    // 2. Khai báo biến trong hàm?
        
        function khaiBaoBienTrongHam(){
            var fullName = 'Thanh Hiep';
            console.log(fullName);
        }
        khaiBaoBienTrongHam();

    // 3. Định nghĩ hàm trong hàm?
        
        function dinhNghiaHamTrongHam() {
            function dinhNghiaHamTrongHam2 () {
                console.log('hiep mtp');
            }
            dinhNghiaHamTrongHam2();
        }

        dinhNghiaHamTrongHam(); // khÔng hiển thị

/**
    Bài 29: Các loại function

        1. Declaration funciton (có thể gọi trước khi khai báo)
        2. Expression funciton
        3. Arrow function
 */
        showDeclaration();
    // 1. Declaration funciton: (định nghĩa function và đặt tên)
        function showDeclaration(){
            console.log('Declaration function');
        }

    // 2. Expression funciton (gán cho 1 biến, function có thể đặt tên hoặc không)
        var showExpression = function testName(){
            console.log('Expression function');
        }
         
    

            // ex: Expression funciton
            setTimeout(function autoLogin(){

            });

            // ex: Expression funciton
            var myObject = {
                myFunction: function testName(){

                }
            }