let a = "abbbb";
let b = "bbbba";
let len = 0;

for(let i = 0 ; i < a.length; i++){
    let count = 0;
    for(let j = 0 ; j < b.length; j++) {
        if(a.charAt(i) == b.charAt(j)){
            count++;
        }
    }

    if(count >= 1){
        len++;
    }
}

if(len == a.length && len == b.length){
    console.log("Its an anagram")
} else{
    console.log("Its not an anagram")
}

 
//APPROACH 2

//let str1 = "abdd";
// let str2 = 'ccca';
// let s1 = {}, s2 = {};

// if(str1.length == str2.length){
//     for(let i = 0; i < str1.length; i++){
//         if(!s1[str1[i]]){
//             s1[str1[i]] = 1;
//         } else{
//             s1[str1[i]]++;
//         }
//           if(!s2[str2[i]]){
//             s2[str2[i]] = 1;
//         } else{
//             s2[str2[i]]++;
//         }
//     }
// }

// console.log(s1, s2);


// function compareObjects(obj1, obj2){
//      let key1 = Object.keys(obj1).sort();
//      let key2 = Object.keys(obj2).sort();

//      if(key1.length != key2.length){
//          return false;
//      }
//      return key1.every(key => obj1[key] === obj2[key]);

// }

// console.log(compareObjects(s1, s2));


