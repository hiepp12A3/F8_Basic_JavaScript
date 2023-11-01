 // video 32: Object contructor

 function User(firstName, lastName, avatar){
     this.firstName = firstName;
     this.lastName = lastName;
     this.avatar = avatar;

     this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
     }
 }

 var author = new User('Hiệp', 'Thanh', 'Avater');
 var user = new User('Binh', 'Thanh', 'Avater');

 author.title = 'Chia se kinh nghiem F8';
user.comment = 'Co nhieu lop hoc mien phi khong a';
 

 console.log(author);
 console.log(user);

 console.log(author.constructor);
 console.log(author.constructor === User);

 console.log(author.getName());
 console.log(user.getName( ));

