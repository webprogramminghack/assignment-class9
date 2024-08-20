# Advanced Function Closures and Lexical Environment in JavaScript

## Objective

Understand how JavaScript's lexical environment works by creating functions that return other functions. This assignment will challenge you to work with closures, demonstrating how inner functions can retain access to variables in their outer lexical environment even after the outer function has returned.

## Instructions

### 1. Understand the Lexical Environment

JavaScript functions create a new lexical environment each time they are invoked. This environment allows inner functions to access variables declared in the outer function, even after the outer function has finished executing. This is known as a closure.

### 2. Implement a Function that Returns a Function

You will implement a function called `createCounter` that:

- Accepts an initial value as its argument.
- Returns an inner function that can increment, decrement, or reset the counter.
- The returned function should be able to:
  - Increment the counter by a given value.
  - Decrement the counter by a given value.
  - Reset the counter to its initial value.

### 3. Add a Logging Feature

Enhance the `createCounter` function so that it also logs each operation (increment, decrement, reset) and the resulting counter value. The logs should be stored and accessible via a method on the returned function.

## Example Usage

```javascript
// Step 1: Implement the createCounter function
function createCounter(initialValue) {
  // Implement logic here
}

// Test createCounter
const counter = createCounter(10);
counter.increment(5); // Counter: 15
counter.decrement(3); // Counter: 12
counter.reset(); // Counter: 10
console.log(counter.getLogs()); // this should produce the following
// [
//   "Incremented by 5, new value: 15",
//   "Decremented by 3, new value: 12",
//   "Counter reset to initial value: 10"
// ]
```
