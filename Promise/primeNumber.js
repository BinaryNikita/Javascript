function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
      break;
    }
  }
  return true;
}

let num = 2;
const prime = new Promise((resolve, reject) => {
  if (isPrime(num)) {
    resolve('Given number is prime');
  } else {
    reject('given number is not prime');
  }
});

prime
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
