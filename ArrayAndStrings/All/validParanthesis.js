/* 

Valid Parentheses
Input: s = "()[]{}"
Output: true
Explanation: All brackets are closed in the correct order.
*/

let s = "()[]{}";
let opening = 0;
let closing = 0;

for(let i = 0; i < s.length; i++){

    if(s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '['){
        opening++;
    } else if(s.charAt(i) == ')' || s.charAt(i) == '}' || s.charAt(i) == ']'){
        closing++;
    }
}

if(opening === closing){
    console.log(true);
} else {
    console.log(false);
}