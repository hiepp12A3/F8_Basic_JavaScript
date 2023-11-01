// video 36: Lệnh rẽ nhánh Switch
 
var date = 3;
switch(date){
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3:
        console.log('Hom nay la thu 3');
        break;
    case 4:
        console.log('Hom nay la thu 4');
        break;
    case 5:
        console.log('Hom nay la thu 5');
        break;
    case 6:
        console.log('Hom nay la thu 6');
        break;
    case 7:
        console.log('Hom nay la thu 7');
        break;
    case 'CN':
        console.log('Hom nay la thu CN');
        break;
}

var date2 = 9;

switch(date2){
    case 2:
    case 3 :
    case 4:
        console.log('Hom nay la thu 2, 3, ');
    case 5:
        console.log('Hom nay la thu 5');

    // Nếu không có case nào bên trên bắt đượcm thì sẽ chạy đến default
    default:
        console.log('Khong biet dau');
}