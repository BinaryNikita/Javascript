/*

Implement strStr()
Input: haystack = "hello", needle = "ll"
Output: 2
Explanation: "ll" starts at index 2.

*/

let haystack = "hello"; 
let needle = "ll", index = 0;;

for(let i = 0; i < haystack.length; i++){
    let ch = haystack.charAt(i);
    if(ch == needle.charAt(0) &&  needle.charAt(0) == haystack.charAt(i + 1) ){
        index = i;
    }
}

console.log(index);



// let haystack = "hello";
// let needle = "ll";

// let index = -1; 
// if (needle === "") {
//     index = 0; 
// } else {
//     for (let i = 0; i <= haystack.length - needle.length; i++) {

//         if (haystack.substring(i, i + needle.length) === needle) {
//             index = i;
//             break; \
//         }
//     }
// }

// console.log(index);
