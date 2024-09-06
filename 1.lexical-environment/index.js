'use strict';

function createCounter(initialValue) {
  // start coding here
  // Accepts an initial value as its argument
  let counter = initialValue;
  const logs = [];

  // logs each operation (increment, decrement, reset) and the resulting counter value. The logs should be stored and accessible via a method on the returned function.
  function logOperation(operation, value) {
    logs.push(`${operation} by ${value}, new value: ${counter}`);
  }

  // Inner function that can increment, decrement, or reset the counter
  const operations = {
    //Increment the counter by a given value.
    increment(value) {
      counter += value;
      logOperation('Incremented', value);
    },
    // Decrement the counter by a given value.
    decrement(value) {
      counter -= value;
      logOperation('Decremented', value);
    },
    // Reset the counter to its initial value.
    reset() {
      counter = initialValue;
      logs.push(`Counter reset to initial value: ${counter}`);
    },
    getValue() {
      counter = counter;
      logs.push(`Counter return with value: ${counter}`);
    },
    getLogs() {
      return logs;
    },
  };

  return operations;
}

const counter = createCounter(10);
counter.increment(5);
counter.decrement(3);
counter.reset();
counter.getValue(); // 10
console.log(counter.getLogs()); // // this should produce the following:
// [
//   "Incremented by 5, new value: 15",
//   "Decremented by 3, new value: 12",
//   "Counter reset to initial value: 10"
// ]
