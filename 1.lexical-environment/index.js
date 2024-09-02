'use strict';

function createCounter(initialValue) {
  // start coding here
  let value = initialValue;
  const logs = [];
  function increment(x) {
    value += x;
    logs.push(`Incremented by ${x}, new value: ${value}`);
  }

  function decrement(x) {
    value -= x;
    logs.push(`Decremented by ${x}, new value: ${value}`);
  }

  function reset(x) {
    value = initialValue;
    logs.push(`Counter reset to initial value: ${value}`);
  }

  function getValue(x) {
    return value;
  }

  function getLogs(x) {
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
