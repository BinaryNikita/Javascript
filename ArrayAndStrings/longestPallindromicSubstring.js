
/* 
Longest Palindromic Substring
Input: s = "babad"
Output: "bab" or "aba"
Explanation: Both are palindromic substrings.
*/

function findLongestPalindromicSubstring() {
    let str = "thequickbrownfoxxofnworbquickthe";

    for (let i = 0; i <= Math.floor(str.length / 2); i++) {
        let word = "";
        for (let j = 0; j < Math.floor(str.length / 2); j++) {
            let ch = str.charAt(i + j);
            word += ch;
        }


        let rev = "";
        let newChar;

        for (let d = 0; d < word.length; d++) {
            newChar = word.charAt(d);
            rev = rev + newChar;         
        }

        let n = word.length - 1;
        let r = 0;
        let count = 0;

        while (r < rev.length && word.charAt(n) === rev.charAt(r)) {
            count++;
            n--;
            r++;
        }

        if (count === word.length) {
            console.log(word + " is a palindrome");
        } else {
            continue;
        }
    }
}

findLongestPalindromicSubstring();


/* 
Other approach
function longestPalindrome(s) {
    let maxPalindrome = "";
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            if (substring === substring.split('').reverse().join('') && substring.length > maxPalindrome.length) {
                maxPalindrome = substring;
            }
        }
    }

    return maxPalindrome;
}

// Example usage
let s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"


*/