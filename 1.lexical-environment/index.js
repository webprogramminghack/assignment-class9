'use strict';

function createCounter(initialValue) {
  // Declare the current value of the counter and a logs array to store operation history
  let currentValue = initialValue;
  const logs = [];

  return {
    // Method to increment the counter by a specified value
    increment(value) {
      currentValue += value;
      logs.push(`Incremented by ${value}, new value: ${currentValue}`);
    },

    // Method to decrement the counter by a specified value
    decrement(value) {
      currentValue -= value;
      logs.push(`Decremented by ${value}, new value: ${currentValue}`);
    },

    // Method to reset the counter to the initial value
    reset() {
      currentValue = initialValue;
      logs.push(`Counter reset to initial value: ${currentValue}`);
    },

    // Method to get the current value of the counter
    getValue() {
      return currentValue;
    },

    // Method to get the logs of all operations
    getLogs() {
      return logs;
    },
  };
}

// Test createCounter
const counter = createCounter(10);
counter.increment(5); // Counter: 15
counter.decrement(3); // Counter: 12
counter.reset(); // Counter: 10

console.log(counter.getValue()); // 10
console.log(counter.getLogs());
// Expected output:
// [
//   "Incremented by 5, new value: 15",
//   "Decremented by 3, new value: 12",
//   "Counter reset to initial value: 10"
// ]
