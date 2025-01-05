function isPallindrome(str) {
  let start = 0,
    end = str.length - 1;
  while (start < end) {
    if (str[start] != str[end]) {
      return false;
      break;
    }
    start++;
    end--;
  }

  return true;
}

let str = 'mmaaadaaamm';
let pallindrome = new Promise((resolve, reject) => {
  if (isPallindrome(str)) {
    resolve(`${str} is a pallindrome`);
  } else {
    reject(`${str} is not a pallindrome`);
  }
});

(async function () {
  try {
    let result = await pallindrome;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
