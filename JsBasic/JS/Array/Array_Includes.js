// Bài 53: String/Array includes() mothod

/*
    => includes: - Dùng để kiểm tra một mảng có chứa giá trị cần tìm hay không
                - True nếu tìm thấy và false ngược lại
                - có 2 tham số truyền vào (cần tìm kiếm, và vị trí bắt đầu tìm kiếm)

                - Cú pháp: array.includes(searchElement[, fromIndex])
                - array: mảng muốn tìm kiếm
                - searchElement: Giá trị muốn kiểm tra xem có tồn tại hay không
                - fromIndex (tùy chọn có hoặc không, nếu dc cấp cấp sẽ bắt đầu tìm kiếm từ vịt trí này, ko sẽ tìm kiếm từ đầu mảng): 
*/

// console.log(Array.prototype.includes)


// Sử dụng với chuỗi
console.log('Trường hợp sử dụng với chuỗi');
var title = 'Reponsive web design';
// true
console.log(title.includes('web', 2));


// Sử dụng với Array
console.log('Sử dụng với Array');
var courses = ['JS', 'PHP', 'Dart'];
// true
console.log(courses.includes('JS')); 
// faild 
// (1 là bắt đầu tìm kiếm từ PHP)
console.log(courses.includes('Ruby', 1)); 