'use strict';

function createCounter(initialValue) {
  // start coding here
  let value = Number(initialValue);
  let logs = []
  return {
    increment(...args){
      const val2 = args.reduce((i, v) => i + v, 0)
      value = value + val2;
      logs.push(`Incremented by ${val2}, new value: ${value}`)
    },
    decrement(...args){
      const val2 = args.reduce((i, v) => i + v, 0)
      value = value - val2;
      logs.push(`Dncremented by ${val2}, new value: ${value}`)
    }, 
    reset(){
      value = initialValue
      logs.push(`Counter Reset To Initial Value ${value}`)
    },
    getValue(){
      return value
    },
    getLogs(){
      return logs
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
