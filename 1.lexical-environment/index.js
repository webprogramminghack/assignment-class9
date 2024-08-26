'use strict';

function createCounter(initialValue) {
  let counter = initialValue;
  const loging = []; 

  
  function countering() {
    return {
      
      increment: function(value) {
        counter += value;
        loging.push("Incremented by " + value + " new value: " + counter);
      },

      decrement: function(value) {
        counter -= value;
        loging.push("Decremented by " + value + " new value: " + counter);
      },

      reset: function() {
        counter = initialValue;
        loging.push("Counter reset to initial value: " + counter);
      },

      getValue: function() {
        return counter;
      },

      getLogs: function() {
        return loging;
      }
    };
  }

  return countering();
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