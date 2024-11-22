/* 

5. Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e.

const input = "Every developer likes to mix kubernetes and javascript";

output: - "E3y d7r l3s to mix k8s and j8t";

 */



let str = "Every developer likes to mix kubernetes and javascript";

function shortString(str){
    let arr = str.split(" ");
    let short = "";
    for(let i in arr){
        if(arr[i].length > 3){
            let count = 0;
            for(let j = 1; j < arr[i].length - 1; j++){
              count++;
            }
            short += " " + arr[i].charAt(0) + count + arr[i].charAt(arr[i].length - 1);

        } else{
            short += " " + (arr[i]);
        }
    }

    console.log(short.trim());
}
// shortString(str);



const shortString2 = (str) => {
    return str.split(" ")
        .map(word => 
            word.length > 3 
            ? `${word[0]}${word.length - 2}${word[word.length - 1]}` 
            : word
        )
        .join(" ");
};

const input = "Every developer likes to mix kubernetes and javascript";
console.log(shortString2(input));
