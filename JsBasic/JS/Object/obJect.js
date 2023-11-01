// Object trong JavaScript

var myInfo = {
    name: ' Thanh Hiep',
    age: 18,
    address: 'Hanoi, VN',
    // add 
    [emailKey]: 'Hiepdeptraisieucapvippro',
    // add function
    getName: function(){
        return this.name;
    },
    getJob: function(){
        return this.emailKey;
    }
};

myInfo.email = 'hiepnguyen318.work@gmail.com';

var myKey = 'address';
// add 
console.log(myInfo[myKey]); 

var emailKey = 'email';


console.log(myInfo);
console.log(myInfo.name);
//undefined
console.log(myInfo['hiepmtp']); 

// xóa key
delete myInfo.age;
console.log(myInfo);
// gọi hàm
console.log(typeof myInfo.getJob());
// Thanh Hiep
console.log(typeof myInfo.getName);

// là Function --> Phương thức // method
// ex: Others -- > thuộc tính // property