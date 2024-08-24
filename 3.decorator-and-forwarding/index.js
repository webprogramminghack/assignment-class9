'use strict';

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

function delayDecorator(func, delay) {
  // Return a new function that preserves 'this' and handles any number of arguments
  return function (...args) {
    const context = this; // Preserve 'this'
    setTimeout(function () {
      func.apply(context, args); // Call the original function with preserved 'this' and arguments
    }, delay);
  };
}

// Decorate the greet and updateProfile methods with the delayDecorator
user.greet = delayDecorator(user.greet, 2000);
user.updateProfile = delayDecorator(user.updateProfile, 3000);

// Test the decorated methods
user.greet('Hello'); // Expected output after 2 seconds: "Hello, John!"
user.updateProfile('Jane', 25); // Expected output after 3 seconds: "Profile updated: Jane, 25"
