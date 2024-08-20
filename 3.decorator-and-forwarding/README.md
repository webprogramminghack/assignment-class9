# Creating a Delay Decorator in JavaScript

## Objective

Learn how to create a decorator function in JavaScript that delays the execution of a method while preserving the `this` context and supporting any number of arguments. This assignment will help you understand how to wrap methods with additional functionality using decorators, manage the flow of arguments, and ensure the correct `this` context is preserved.

## Instructions

### 1. Understand the Concepts

- **Decorator Function:** A decorator is a function that takes another function as an argument, wraps it in some additional functionality, and returns a new function with the enhanced behavior.
- **`setTimeout`:** A built-in JavaScript function that executes a function after a specified delay.

### 2. Implement the `delayDecorator` Function

You will implement a function called `delayDecorator` that:

- Accepts a function `func` and a delay in milliseconds `ms` as its arguments.
- Returns a new function that, when called, delays the execution of `func` by `ms` milliseconds.
- The returned function should correctly handle the `this` context and support any number of arguments

### 3. Decorate Methods in an Object

The following object `user` has two methods: `greet` and `updateProfile`. Your task is to use the `delayDecorator` to delay the execution of these methods.

```javascript
const user = {
  name: 'John',
  age: 30,
  greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  },
  updateProfile(newName, newAge) {
    this.name = newName;
    this.age = newAge;
    console.log(`Profile updated: ${this.name}, ${this.age}`);
  },
};

// Step 4: Decorate the greet and updateProfile methods with the delayDecorator
user.greet = delayDecorator(user.greet, 2000);
user.updateProfile = delayDecorator(user.updateProfile, 3000);

// Step 5: Test the decorated methods
user.greet('Hello'); // Expected output after 2 seconds: "Hello, John!"
user.updateProfile('Jane', 25); // Expected output after 3 seconds: "Profile updated: Jane, 25"
```
