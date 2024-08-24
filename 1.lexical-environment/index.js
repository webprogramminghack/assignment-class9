'use strict';

function createCounter(initialValue) {
  let counter = initialValue;
  let logs = [];

  function updateLog(action, value) {
    const logMessage = `${action} by ${value}, new value: ${counter}`;
    logs.push(logMessage);
  }

  return {
    increment: function (value) {
      counter += value;
      updateLog('Incremented', value);
      return this; // Make it chainable
    },
    decrement: function (value) {
      counter -= value;
      updateLog('Decremented', value);
      return this; // Make it chainable
    },
    reset: function () {
      counter = initialValue;
      const logMessage = `Counter reset to initial value: ${counter}`;
      logs.push(logMessage);
      return this; // Make it chainable
    },
    getValue: function () {
      return counter;
    },
    getLogs: function () {
      return logs;
    },
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
