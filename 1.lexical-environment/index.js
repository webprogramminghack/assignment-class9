'use strict';

function createCounter(initialValue) {
  // start coding here
  let value = initialValue;
  let logs = [];

  return {
    increment: function (amount) {
      value += amount;
      logs.push(`Incremented by ${amount}, new value: ${value}`);
    },
    decrement: function (amount) {
      value -= amount;
      logs.push(`Decremented by ${amount}, new value: ${value}`);
    },
    reset: function () {
      value = initialValue;
      logs.push(`Counter reset to initial value: ${initialValue}`);
    },
    getValue: function () {
      return value;
    },
    getLogs: function () {
      return logs;
    }
  };
}


const counter = createCounter(10);
counter.increment(5);
counter.decrement(3);
counter.reset();
console.log(counter.getValue()); // 10
console.log(counter.getLogs()); // // this should produce the following:
// [
//   "Incremented by 5, new value: 15",
//   "Decremented by 3, new value: 12",
//   "Counter reset to initial value: 10"
// ]
