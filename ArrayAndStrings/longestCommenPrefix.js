function longestCommonPrefix(strs) {
    
    let prefix = strs[0];  

    for (let i = 1; i < strs.length; i++) {
        let currentString = strs[i];
        let j = 0;
        while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
            j++;
        }
        let newPrefix = '';
        for (let k = 0; k < j; k++) {
            newPrefix += prefix[k];  
        }
        prefix = newPrefix;  
        if (prefix === '') {
            return '';
        }
    }
    return prefix;  
}

console.log(longestCommonPrefix(["Nikita", 'Nike', 'Nikke']));  
