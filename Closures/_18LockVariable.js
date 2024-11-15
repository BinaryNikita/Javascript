// Create a closure-based function that "locks" a variable, preventing it from being modified by outside code but allowing it to be incremented or decremented via the closure.

function lockVariableCounter(num) {
  let counter = num;
  return {
    increament() {
      counter++;
      console.log(`After Increment: ${counter}`);
    },

    decreament() {
      counter--;
      console.log(`After Decreament: ${counter}`);
    },

    getValue() {
       console.log( counter);
    }
  };
}


const varFunction = lockVariableCounter(10);
varFunction.getValue();
varFunction.increament();
varFunction.decreament();

