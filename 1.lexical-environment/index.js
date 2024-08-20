'use strict';

function createCounter(initialValue) {
  // start coding here
  let privateValue = initialValue;
  const logs = [];

  function changeBy(val) {
    privateValue += val;
  }

  return {
    increment(val) {
      changeBy(val);
      logs.push(`Incremented by ${val}, new value: ${privateValue}`);
    },
    decrement(val) {
      changeBy(-val);
      logs.push(`Decremented by ${val}, new value: ${privateValue}`);
    },
    reset() {
      privateValue = initialValue;
      logs.push(`Counter reset to initial value: ${initialValue}`);
    },
    getValue() {
      return privateValue;
    },
    getLogs() {
      return logs;
    }
  }
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
