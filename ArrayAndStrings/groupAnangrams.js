/* 
Group Anagrams
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
Explanation: Words are grouped by their sorted characters.
*/

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let group = {};

for (let i = 0; i < strs.length; i++) {
  let key = strs[i].split("").sort().join("");

  if (!group[key]) {
    group[key] = [];
  }
  
  group[key].push(strs[i]);
}
console.log(group);

let result = Object.values(group);
console.log(result);
