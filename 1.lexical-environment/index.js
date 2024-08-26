'use strict';

function createCounter(initialValue) {
  // start coding here
  let privateValue = initialValue;
  const logs = [];

  function increment(val) {
    privateValue += val;
    logs.push(`Incremented by ${val}, new value: ${privateValue}`);
    return this;
  }
  
  function decrement(val) {
    privateValue -= val;
    logs.push(`Decremented by ${val}, new value: ${privateValue}`);
    return this;
  }

  function reset() {
    privateValue = initialValue;
    logs.push(`Counter reset to initial value: ${initialValue}`);
    return this;
  }

  function getValue() {
    return privateValue;
  }

  function getLogs() {
    return logs;
  }

  return {
    increment,
    decrement,
    reset,
    getValue,
    getLogs
  }
}

const counter = createCounter(10);
counter.increment(5);
counter.decrement(3);
counter.reset();
console.log(counter.getValue()); // 10
console.log(counter.getLogs()); // // this should produce the following:
[
  "Incremented by 5, new value: 15",
  "Decremented by 3, new value: 12",
  "Counter reset to initial value: 10"
]