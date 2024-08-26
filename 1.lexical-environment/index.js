'use strict';

function createCounter(initialValue) {
  // start coding here

  let value = initialValue;
  let logs = [];
  function increment(incr) {
    value += incr;
    logs.push(`Incremented by ${incr}, new value: ${value}`);
  }
  function decrement(decr) {
    value -= decr;
    logs.push(`Decremented by ${decr}, new value: ${value}`);
  }
  function reset() {
    logs.push(`Counter reset to initial value: ${initialValue}`);
    value = initialValue;
  }
  function getValue() {
    return value;
  }
  function getLogs() {
    return logs;
  }
  return {
    increment,
    decrement,
    reset,
    getValue,
    getLogs,
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
