/* 
3. The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
 const input = "George Raymond Richard Martin";
 output :- "GRRM";
*/

let str = 'George Raymond Richard Martin';

function firstWordStr(str) {
  let arr = str.split(' ');
  let s, word = '';
  s = arr.map((a) => a.charAt(0));

  for (let a of s) {
    word += a;
  }

  console.log(word);
}
firstWordStr(str);
