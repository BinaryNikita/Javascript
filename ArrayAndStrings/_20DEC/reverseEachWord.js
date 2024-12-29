let str = 'Java is very easy.';

function reverseSubstring(str) {
  let rev = '';

  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != ' ' && str.charAt(i) != '.') {
      word = str.charAt(i) + word;
    } else {
      rev += word + ' ';
      word = '';
    }
  }
  console.log(rev);
}


