/* 
    video 33: Object prototype

    1. Prototype là gì?
    2. Sử dụng khi nào?
*/ 


function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
       return `${this.firstName} ${this.lastName}`;
    }
}

var user1 = new User('Hiệp', 'Thanh', 'Avater');
var user2 = new User('Binh', 'Thanh', 'Avater');

user1.title = 'Chia se kinh nghiem F8';
user2.comment = 'Co nhieu lop hoc mien phi khong a';

console.log(user1);
console.log(user2);

// prototype

// cách sai
User.className = 'F8'; 
// cách đúng (Thêm thuộc tính)
User.prototype.className = 'F88' 
// Thêm phương thức
User.prototype.getClassName = function(){
    return this.className;
}

console.log(user1.className); // F8  
console.log(user2.getClassName());