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
  // start coding here
  return function () {
    let result = setTimeout(() => func.apply(this, arguments), delay);
    return result;
  };
}

user.greet = delayDecorator(user.greet, 2000);
user.updateProfile = delayDecorator(user.updateProfile, 3000);

user.greet('Hello'); // Expected output after 2 seconds: "Hello, John!"
user.updateProfile('Jane', 25); // Expected output after 3 seconds: "Profile updated: Jane, 25"
