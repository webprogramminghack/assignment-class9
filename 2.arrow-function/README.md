# Advanced Usage of Arrow Functions in JavaScript

## Objective

Deepen your understanding of arrow functions in JavaScript by exploring their specific features and limitations. This assignment will help you understand how arrow functions differ from regular functions, especially in the context of `this` and `arguments`. You'll apply these concepts in various scenarios to reinforce your understanding.

## Instructions

### 1. Understand the Key Concepts

Arrow functions in JavaScript have some important characteristics that set them apart from regular functions:

- **No `this` Binding:** Arrow functions don’t have their own `this`. Instead, they inherit `this` from the outer lexical context.
- **No `arguments` Object:** Arrow functions do not have their own `arguments` object.
- **Not Usable as Constructors:** Arrow functions cannot be used as constructors and cannot be called with `new`.

### 2. Implement a Method Using Arrow Functions

You will implement an object method that uses arrow functions to demonstrate the difference in how `this` is handled compared to regular functions.

Use `console.log` to print the result to the console.

## Example Usage

```javascript
// Step 1: Create an object with a method using arrow functions
const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  displayMembers() {
    // Implement logic here
  },
};

// Test displayMembers method
team.displayMembers();
// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
```
