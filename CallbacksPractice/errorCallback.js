function divideNumbers(a, b, callback) {
    if (b === 0) {
      callback("Error: Division by zero is not allowed", null);
    } else {

      const result = a / b;
      callback(null, result);
    }
  }
  

  divideNumbers(10, 0, (error, result) => {
    if (error) {
      console.error("Error:", error); 
    } else {
      console.log("Result:", result); 
    }
  });