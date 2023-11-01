// video 45: Vòng lặp Do/while

var i = 0;

// do {
//     i++;
//     console.log(i);
// } while (i<10);

// ex:
var isSuccess = false;

do{
    i++;
    console.log('Nap the lan ' + i + '');

    // thanh cong
    if(false){
        isSuccess = true;
    }

} while (!isSuccess && i < 3);