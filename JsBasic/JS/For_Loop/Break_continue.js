// video 46: Vòng lặp lồng nhau (Nested loop)

// break và continue trong vòng lặp

// ex1: break 
for (var i = 0; i < 10; i++){
    console.log(i);

    if(i >= 5){
        break;
    }
}

console.log('--------------------------------')

// ex2: continue
for (var i = 0; i < 10; i++){

    if(i%2 !== 0 ){
        continue;
    }
    console.log(i);
}