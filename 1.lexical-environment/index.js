'use strict';

function createCounter(initialValue) {
  // start coding here

  /**
   * 
   * 1. Accepts an initial value as its argument.
   * 2. Returns an inner function that can increment, decrement, or reset the counter.
   * 3. The returned function should be able to:
   * - Increment the counter by a given value.
   * - Increment the counter by a given value.
   * - Decrement the counter by a given value.
   * - Reset the counter to its initial value.
   * 
  */

  createCounter.currVal = initialValue;
  createCounter.logs    = [];

  createCounter.increment = (num) => {
    createCounter.currVal += num;
    createCounter.logs.push(`Incremented by ${num}, new value: ${createCounter.currVal}`);
    
    return `incremented by ${num}`;
  };

  createCounter.decrement = (num) => {
    createCounter.currVal -= num;
    createCounter.logs.push(`Decremented by ${num}, new value: ${createCounter.currVal}`);

    return `decremented by ${num}`;
  };

  createCounter.reset = () => {
    createCounter.currVal = initialValue;
    createCounter.logs.push(`Counter reset to initial value: ${createCounter.currVal}`);

    return "reset";
  };

  createCounter.getValue = () => {
    return `current value => ${createCounter.currVal}`;
  };

  createCounter.getLogs = () => {
    return createCounter.logs;
  };
  

  return createCounter;

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
