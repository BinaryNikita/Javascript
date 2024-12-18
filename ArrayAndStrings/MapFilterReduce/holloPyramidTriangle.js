
//     *
//    * *
//   *   *
//  *     *
// * * * * *


for(let i = 1; i <= 5; i++){
    let s ='';
    for(let j = 1; j <= 5 - i; j++ ){
        s += ' ';
    }
    for(let j = 1; j <= i; j++){ 
        if(j == 1 || j == i || i == 5){
        s += '* ';
        } else{
            s += '  ';
        }
        
    }
    
    console.log(s);
    s = '';
}

















